import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardProps {
  createdAt: string; // Title of the card
  fileName: string;
}

export default function Cards({ items }: { items: CardProps }) {
  return (
    <Card className="w-full h-24 flex flex-col justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <CardTitle>{items.createdAt}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base">{items.fileName}</p>
      </CardContent>
    </Card>
  );
}
