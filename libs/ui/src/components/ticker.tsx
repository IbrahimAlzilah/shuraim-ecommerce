import { cn } from "cn"

function Ticker({
  messages,
  dir = "ltr",
  className,
}: {
  messages: string[]
  dir?: "ltr" | "rtl"
  className?: string
}) {
  if (messages.length === 0) {
    return null
  }

  const groups = [messages, messages, messages]

  return (
    <div
      className={cn(
        "group bg-primary text-primary-foreground overflow-hidden text-xs",
        className
      )}
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-6">
        <div
          className={cn(
            "flex w-max gap-12 py-2 whitespace-nowrap group-hover:paused group-focus-within:paused",
            dir === "rtl" ? "animate-ticker-rtl" : "animate-ticker-ltr"
          )}
        >
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex > 0}
              className="flex shrink-0 gap-12"
            >
              {group.map((message, index) => (
                <span key={index}>{message}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Ticker }
