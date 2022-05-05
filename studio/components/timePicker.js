import React from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import DatePicker, {registerLocale} from 'react-datepicker'
import de from 'date-fns/locale/de'
import styles from './timePicker.module.css'
import Button from 'part:@sanity/components/buttons/default'

import 'react-datepicker/dist/react-datepicker.css?raw'

export default class TimePicker extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.value)

    this.state = {
      PickerTime: this.prepValue(props.value),
      OutputTime: props.value ? props.value : undefined
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.prepValue = this.prepValue.bind(this)
  }

  handleChange(time) {
    console.log(time)
    this.setState(
      {
        PickerTime: time ? new Date(time) : undefined,
        OutputTime: time ? time.toLocaleTimeString() : undefined
      },
      () => {
        // sendit to sanity
        this.props.onChange(PatchEvent.from(set(String(this.state.OutputTime))))
      }
    )
  }

  handleClear() {
    this.setState(
      {
        PickerTime: undefined,
        OutputTime: undefined
      },
      () => {
        // sendit to sanity - sendity (:
        this.props.onChange(PatchEvent.from(unset()))
      }
    )
  }

  prepValue(value) {
    const timeArr = value ? value.split(':').splice(0, 2) : undefined

    const date = timeArr ? new Date(2017, 6, 6, timeArr[0], timeArr[1]) : undefined

    return date
  }

  render() {
    const {PickerTime, dateFormat} = this.state
    const {value, type, level, markers} = this.props
    const {title, description, options} = type

    console.log(this.state)

    return (
      <React.Fragment>
        <FormField
          markers={markers}
          labelFor={this.inputId}
          label={title}
          level={level}
          description={description}
        >
          <div className={styles.root}>
            <div className={styles.inputWrapper}>
              <DatePicker
                selected={PickerTime}
                onChange={this.handleChange}
                onChangeRaw={this.handleChangeRaw}
                showTimeSelect
                showTimeSelectOnly
                dateFormat={options.dateFormat}
                timeFormat={options.timeFormat}
                timeCaption={options.timeCaption}
                timeIntervals={options.timeStep}
                showTimeInput
                locale={de}
                placeholderText={options.placeholder}
                className={styles.input}
              />
            </div>
          </div>
        </FormField>

        <div className={styles.extensionBar}>
          <div className={styles.BtnWrapper}>
            <Button color="danger" onClick={this.handleClear}>
              {options.clearBtnText}
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
