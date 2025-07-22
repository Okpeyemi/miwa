"use client"
import { Search, RotateCcw, BarChart3, Users, Calendar, Settings, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { name: "Dashboard", icon: BarChart3, active: true },
  { name: "Présences", icon: Users },
  { name: "Espaces & Motifs", icon: Calendar },
  { name: "Utilisateurs", icon: User },
  { name: "Événements", icon: Calendar },
  { name: "Administration", icon: Settings },
]

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">MIWA</h1>
        </div>

        <nav className="px-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors",
                item.active ? "bg-teal-100 text-teal-700 font-medium" : "text-gray-600 hover:bg-gray-100",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Franck User</p>
              <p className="text-sm text-gray-500">Administrateur</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Rechercher" className="pl-10 bg-gray-50 border-0" />
            </div>
            <Button variant="outline" className="bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500">
              <RotateCcw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Usagers</p>
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-sm text-gray-500">Aujourd'hui</p>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">+5</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Visiteurs</p>
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-sm text-gray-500">Aujourd'hui</p>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">+10</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-teal-400 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Présences totales</p>
                    <p className="text-3xl font-bold">48</p>
                    <p className="text-sm opacity-75">Personnes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Présents actuellement</p>
                    <p className="text-3xl font-bold">10</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Voir liste
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Graphique de fréquentation</CardTitle>
                <div className="flex items-center gap-4">
                  <select className="border rounded px-3 py-1 text-sm">
                    <option>7 derniers jours</option>
                  </select>
                  <div className="text-sm text-gray-600">05 Mai 2025 - 11 Mai 2025</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-4 mb-6">
                {[
                  { day: "Lun 05 Mai", users: 16, visitors: 6 },
                  { day: "Mar 06 Mai", users: 24, visitors: 9 },
                  { day: "Mer 07 Mai", users: 27, visitors: 15 },
                  { day: "Jeu 08 Mai", users: 22, visitors: 6 },
                  { day: "Ven 09 Mai", users: 29, visitors: 8 },
                  { day: "Sam 10 Mai", users: 17, visitors: 36 },
                  { day: "Dim 11 Mai", users: 4, visitors: 4 },
                ].map((data, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div className="flex items-end gap-1 h-40">
                      <div className="bg-yellow-400 w-8 rounded-t" style={{ height: `${(data.users / 36) * 100}%` }} />
                      <div className="bg-blue-600 w-8 rounded-t" style={{ height: `${(data.visitors / 36) * 100}%` }} />
                    </div>
                    <p className="text-xs text-gray-600 text-center">{data.day}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="text-sm">Usagers</span>
                  <span className="font-medium">50</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-sm">Visiteurs</span>
                  <span className="font-medium">20</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Genre / Sexe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-500">Graphique à venir</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statut</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-to-r from-teal-400 to-blue-600 rounded flex items-center justify-center">
                  <p className="text-white">Données de statut</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
