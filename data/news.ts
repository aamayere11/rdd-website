export type NewsItem = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Research and Documentation Directorate Strengthens Research Activities",
    content:
      "The Research and Documentation Directorate continues to strengthen research, documentation and evidence-based information to support effective decision-making in Kano State.",
    image: "/images/news1.jpg",
    createdAt: "2026-08-12",
  },

  {
    id: 2,
    title: "RDD Promotes Evidence-Based Policy Development",
    content:
      "The Directorate remains committed to providing reliable research findings and documented information that contribute to effective policy development and governance.",
    image: "/images/news2.jpg",
    createdAt: "2026-08-10",
  },

  {
    id: 3,
    title: "Research and Documentation Activities Across Kano State",
    content:
      "The Research and Documentation Directorate continues to document important activities, developments and initiatives across Kano State.",
    image: "/images/news3.jpg",
    createdAt: "2026-08-08",
  },
  
];