import { useAtom } from "jotai";
import { notificationsAtom } from "../atoms/notification";

import { Button } from "./ui/button";
export default function NotificationComponent() {
  const [notifications, setNotifications] = useAtom(notificationsAtom);

  const clearNotifications = () => {
    // Optionally add sliding out animation here
    setNotifications([]);
  };

  const toggleReadStatus = (notificationId: string) => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isRead:
          notification.id === notificationId
            ? !notification.isRead
            : notification.isRead,
      }))
    );
  };

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Button
          onClick={clearNotifications}
          className="text-sm"
          variant="ghost"
        >
          Clear All
        </Button>
      </div>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${
            notification.isRead ? "text-[#83888B]" : "text-[#363430]"
          } flex flex-col justify-start  items-start px-2 py-3 border-b`}
          onClick={() => toggleReadStatus(notification.id)}
        >
          <p className="flex justify-between">
            <text
              className={`${
                notification.isRead
                  ? "text-[#83888B]"
                  : "font-semibold text-[#363430]"
              }`}
            >
              {notification.message}
            </text>
            {!notification.isRead ? "•" : ""}
          </p>
          <p>{notification.date}</p>
        </div>
      ))}
    </div>
  );
}
