import {
  LayoutGrid,
  Clock,
  Calendar,
  ClipboardList,
  BarChart2,
  Microscope,
  MessageSquare,
  LifeBuoy,
  Settings,
} from "lucide-react"

export const navigationItems = [
  {
    section: "General",
    items: [
      { name: "Dashboard", icon: LayoutGrid, active: true },
      { name: "History", icon: Clock },
      { name: "Calendar", icon: Calendar },
      { name: "Appointments", icon: ClipboardList },
      { name: "Statistics", icon: BarChart2 },
      { name: "Tests", icon: Microscope },
    ],
  },
  {
    section: "Tools",
    items: [
      { name: "Chat", icon: MessageSquare },
      { name: "Support", icon: LifeBuoy },
      { name: "Setting", icon: Settings },
    ],
  },
]
