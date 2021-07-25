import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const TimeDiff = ({ diff, unit }) => (
  <div className="mx-5 text-center">
    <div className="text-4xl font-black">{diff}</div>
    <div className="capitalize">{unit}</div>
  </div>
)
const CountdownTimer = () => {
  const [duration, setDuration] = useState(null)

  useEffect(() => {
    let interval = setInterval(() => {
      const now = dayjs()
      const end = dayjs().endOf('year')
      setDuration(dayjs.duration(end.diff(now)))
    }, 1000)
    // function called when component will be unamounted
    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!duration) return null
  return (
    <div className="mt-40">
      <div className="text-4xl font-semibold text-center">New Years Eve</div>
      <div className="flex justify-center mt-20">
        <TimeDiff diff={duration.months()} unit="months" />
        <TimeDiff diff={duration.days()} unit="days" />
        <TimeDiff diff={duration.hours()} unit="hours" />
        <TimeDiff diff={duration.minutes()} unit="minutes" />
        <TimeDiff diff={duration.seconds()} unit="seconds" />
      </div>
    </div>
  )
}
export default CountdownTimer
