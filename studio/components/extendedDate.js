import React from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import Button from 'part:@sanity/components/buttons/default'
import Checkbox from 'part:@sanity/components/toggles/checkbox'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import DatePicker, {registerLocale} from 'react-datepicker'
import de from 'date-fns/locale/de'
import styles from './extendedDate.module.css'

import 'react-datepicker/dist/react-datepicker.css?raw'

export default class ExtendedDateInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pickerDate: props.value ? new Date(props.value) : undefined,
      outputDate: props.value ? props.value : undefined,
      showTimePicker: props.value ? this.checkTimePicker(props.value) : true,
      dateFormat: props.value
        ? this.checkDateFormat(
            props.value,
            props.type.options.dateFormat,
            props.type.options.timeFormat
          )
        : `${props.type.options.dateFormat} ${props.type.options.timeFormat}`
    }
    this.checkTimePicker = this.checkTimePicker.bind(this)
    this.checkDateFormat = this.checkDateFormat.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.toggleTimePicker = this.toggleTimePicker.bind(this)
    this.formatDate = this.formatDate.bind(this)
    this.formatISOString = this.formatISOString.bind(this)
  }

  checkTimePicker(dateISOString) {
    // check if dateformat is with time ore without
    // If date string is > 10 its with time
    if (dateISOString.length > 10) return true
    return false
  }

  checkDateFormat(dateISOString, dateFormat, timeFormat) {
    // If date string is > 10 its with time
    if (dateISOString.length > 10) return `${dateFormat} ${timeFormat}`
    return `${dateFormat}`
  }

  handleChange(date = new Date()) {
    // prepare ISO String - with Time ore without?
    const ISODate = this.formatISOString(date, this.state.showTimePicker)

    this.setState(
      {
        pickerDate: date,
        outputDate: ISODate
      },
      () => {
        // sendit to sanity
        this.props.onChange(PatchEvent.from(set(String(this.state.outputDate))))
      }
    )
  }

  handleClear() {
    this.setState(
      {
        pickerDate: undefined,
        outputDate: undefined
      },
      () => {
        // sendit to sanity - sendity (:
        this.props.onChange(PatchEvent.from(unset()))
      }
    )
  }

  toggleTimePicker() {
    // Toggle the actual TimePicker
    this.setState(
      (prevState) => {
        return {
          showTimePicker: !prevState.showTimePicker
        }
      },
      () => {
        // Change the Time Formatting
        this.formatDate(this.state.showTimePicker)
        // Update Data
        this.handleChange(this.state.pickerDate)
      }
    )
  }

  formatDate(timePicker) {
    if (timePicker) {
      // set it to show the Time
      this.setState({
        dateFormat: `${this.props.type.options.dateFormat} ${this.props.type.options.timeFormat}`
      })
    } else {
      // else not show the Time
      this.setState({
        dateFormat: `${this.props.type.options.dateFormat}`
      })
    }
  }

  formatISOString(date, time) {
    // With Time
    if (time) {
      return date.toISOString()
    }
    // Without Time
    return date.toISOString().split('T')[0]
  }

  render() {
    const {pickerDate, showTimePicker, dateFormat} = this.state
    const {value, type, level, markers} = this.props
    const {title, description, options} = type

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
                selected={pickerDate}
                onChange={this.handleChange}
                showTimeSelect={showTimePicker}
                dateFormat={dateFormat}
                timeFormat={options.timeFormat}
                timeCaption={options.timeCaption}
                timeIntervals={options.timeStep}
                locale={de}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText={options.placeholder}
                className={styles.input}
                calendarClassName={styles.datepicker}
                todayButton={
                  <Button color="primary" onClick={() => this.handleChange()}>
                    {options.todayButtonText}
                  </Button>
                }
              />
            </div>
          </div>
        </FormField>
        <div className={styles.extensionBar}>
          <div className={styles.checkBoxWrapper}>
            <Checkbox
              description={type.description}
              onChange={this.toggleTimePicker}
              checked={!showTimePicker}
            >
              {options.toggleText}
            </Checkbox>
          </div>
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
