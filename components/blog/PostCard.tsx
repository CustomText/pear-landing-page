import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  url: string;
}

const normalizeDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const PostCard = ({ title, date, excerpt, thumbnail, url }: PostCardProps) => (
  <Card className="flex h-full flex-col overflow-hidden hover:bg-secondary-300/10">
    <Link href={url}>
      <div className="relative aspect-video w-full">
        <Image
          fill
          src={thumbnail}
          alt={title}
          className="h-full w-full rounded-md"
        />
      </div>
      <CardContent className="flex-grow p-4">
        <time dateTime={date} className="mb-2 block text-xs text-gray-500">
          {format(parseISO(normalizeDate(date)), "LLLL d, yyyy")}
        </time>
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="line-clamp-3 text-sm text-gray-500">{excerpt}</p>
      </CardContent>
    </Link>
  </Card>
);

export default PostCard;
