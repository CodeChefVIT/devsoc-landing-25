export interface TimelineEvent {
  time: string;
  event: string;
  day: number;
}
export const events: TimelineEvent[] = [
  // Day 1 - 03.02.2025
  { time: "9:00 am", event: "Doors open and check-in", day: 1 },
  { time: "10:00 am", event: "Opening Ceremony", day: 1 },
  { time: "11:00 am", event: "Hacking Session Begins", day: 1 },
  { time: "3:30 pm", event: "Panel Discussion", day: 1 },
  { time: "11:00 pm", event: "Jam Session", day: 1 },

  // Day 2 - 04.02.2025
  { time: "12:00 am", event: "Review 1", day: 2 },
  { time: "9:00 am", event: "Hack Time", day: 2 },
  { time: "10:00 pm", event: "Engagement Activity", day: 2 },

  // Day 3 - 05.02.2025
  { time: "12:00 am", event: "Review 2", day: 3 },
  { time: "5:30 am", event: "Final Submission", day: 3 },
  { time: "9:00 am", event: "Final Pitches", day: 3 },
  {
    time: "11:00 am",
    event: "Prize Distribution and Closing Ceremony",
    day: 3,
  },
];
