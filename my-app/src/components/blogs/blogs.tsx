import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [],
}: Blog7Props) => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16 px-4">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 ">
            {tagline}
          </Badge>
          <h1 className=" py-5 text-4xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.95] bg-gradient-to-b from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:to-neutral-500">
            {heading}
          </h1>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-md">
            {description}
          </p>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full max-w-7xl mx-auto">
          {posts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <Card className="h-full grid grid-rows-[auto_auto_1fr_auto] cursor-pointer hover:shadow-xl transition-all duration-300 group border-none bg-card/50 backdrop-blur-sm overflow-hidden ring-1 ring-border">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{post.label}</Badge>
                    <span className="text-[10px] text-muted-foreground">{post.published}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{post.summary}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    Read article
                    <ArrowRight className="size-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
