import { DataProps } from "@/components/EventSection"

export interface CalendarProps {
  events: Array<DataProps>
  currentDate: Date | null
  today: string | null
}
