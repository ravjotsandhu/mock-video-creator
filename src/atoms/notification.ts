import { atom } from "jotai";

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

export const notificationsAtom = atom<Notification[]>([
  {
    id: "1",
    title: "Notification",
    message:
      "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
    isRead: false,
  },
  {
    id: "2",
    title: "Notification",
    message:
      "It is a long established fact that a reader will be distracted by the readable.",
    date: "24 Feb, 2025",
    isRead: true,
  },
  {
    id: "3",
    title: "Notification",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    date: "04 Jan, 2025",
    isRead: false,
  },
]);
