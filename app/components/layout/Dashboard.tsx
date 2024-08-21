import { Link } from "@remix-run/react";
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: Activity,
  },
];

const transactions = [
  {
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Approved",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    customer: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    customer: "Noah Williams",
    email: "noah@example.com",
    type: "Subscription",
    status: "Approved",
    date: "2023-06-25",
    amount: "$350.00",
  },
  {
    customer: "Emma Brown",
    email: "emma@example.com",
    type: "Sale",
    status: "Approved",
    date: "2023-06-26",
    amount: "$450.00",
  },
  {
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Approved",
    date: "2023-06-27",
    amount: "$550.00",
  },
];

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/placeholder.svg",
    fallback: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/placeholder.svg",
    fallback: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/placeholder.svg",
    fallback: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/placeholder.svg",
    fallback: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/placeholder.svg",
    fallback: "SD",
  },
];

export function Dashboard() {
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {stats.map(({ title, value, change, icon: Icon }, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="#">
                  View All <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map(
                    ({ customer, email, type, status, date, amount }, idx) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <TableRow key={idx}>
                        <TableCell>
                          <div className="font-medium">{customer}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          {type}
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            {status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          {date}
                        </TableCell>
                        <TableCell className="text-right">{amount}</TableCell>
                      </TableRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {recentSales.map(
                ({ name, email, amount, avatar, fallback }, idx) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <div key={idx} className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src={avatar} alt="Avatar" />
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">{name}</p>
                      <p className="text-sm text-muted-foreground">{email}</p>
                    </div>
                    <div className="ml-auto font-medium">{amount}</div>
                  </div>
                ),
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
