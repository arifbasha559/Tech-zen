const Home = () => {
  const datas = [
    {
      image_url: "https://dummyimage.com/600x400/ff9933/000",
      title: "The Power of Meditation: Unlocking Inner Peace",
      description:
        "Exploring the science behind meditation and its profound effects on mental health and well-being. Learn how a regular meditation practice can lead to increased clarity and happiness.",
      date: "2024-03-15",
      author: "Michael Lee",
      link: "https://example.com/power-of-meditation",
    },
    {
      image_url: "https://dummyimage.com/600x400/3366ff/fff",
      title: "Climate Change: Urgency for Action",
      description:
        "An urgent call to action on the global climate crisis. From rising temperatures to extreme weather events, the time to address climate change is now.",
      date: "2024-03-12",
      author: "Sarah Johnson",
      link: "https://example.com/climate-change-action",
    },
    {
      image_url: "https://dummyimage.com/600x400/33ffcc/000",
      title: "Exploring the Depths of the Ocean",
      description:
        "Dive into the mysteries of the deep sea and discover fascinating creatures and ecosystems. From the Mariana Trench to coral reefs, the ocean holds endless wonders.",
      date: "2024-03-10",
      author: "Alex Chen",
      link: "https://example.com/ocean-exploration",
    },
    {
      image_url: "https://dummyimage.com/600x400/ff3366/fff",
      title: "The Art of Storytelling: Connecting Through Narrative",
      description:
        "Examining the power of storytelling in human communication and connection. Discover how compelling narratives shape our understanding of the world.",
      date: "2024-03-08",
      author: "Jessica Davis",
      link: "https://example.com/art-of-storytelling",
    },
    {
      image_url: "https://dummyimage.com/600x400/33ccff/000",
      title: "The Rise of Veganism: A Sustainable Lifestyle",
      description:
        "Exploring the environmental and ethical benefits of adopting a vegan lifestyle. From reducing carbon emissions to animal welfare, veganism is on the rise.",
      date: "2024-03-05",
      author: "Ryan Miller",
      link: "https://example.com/veganism-sustainability",
    },
    {
      image_url: "https://dummyimage.com/600x400/ff33cc/fff",
      title: "Innovations in Renewable Energy",
      description:
        "Highlighting the latest advancements in renewable energy technology and their potential to combat climate change. From solar panels to wind turbines, the future is green.",
      date: "2024-03-03",
      author: "Sophia Wilson",
      link: "https://example.com/renewable-energy-innovations",
    },
    {
      image_url: "https://dummyimage.com/600x400/33ff99/000",
      title: "The Psychology of Happiness",
      description:
        "Delving into the science of happiness and the factors that contribute to a fulfilling life. From gratitude to resilience, uncover the secrets to lasting happiness.",
      date: "2024-02-29",
      author: "Daniel Brown",
      link: "https://example.com/psychology-of-happiness",
    },
    {
      image_url: "https://dummyimage.com/600x400/ff6633/fff",
      title: "The Future of Work: Embracing Remote Collaboration",
      description:
        "Exploring the shift towards remote work and its impact on productivity and work culture. From virtual meetings to digital nomadism, adaptability is key in the modern workplace.",
      date: "2024-02-27",
      author: "Emma Thompson",
      link: "https://example.com/future-of-work",
    },
    {
      image_url: "https://dummyimage.com/600x400/3399ff/fff",
      title: "The Art of Cooking: Exploring Culinary Creativity",
      description:
        "Celebrating the diversity of culinary traditions and the creativity of chefs around the world. From fusion cuisine to molecular gastronomy, food is an art form.",
      date: "2024-02-24",
      author: "Christopher Clark",
      link: "https://example.com/art-of-cooking",
    },
    {
      image_url: "https://dummyimage.com/600x400/ff3399/fff",
      title: "The Promise of Genetic Engineering",
      description:
        "Examining the potential of genetic engineering in revolutionizing healthcare, agriculture, and beyond. From gene editing to personalized medicine, the future is genetically tailored.",
      date: "2024-02-22",
      author: "Olivia Garcia",
      link: "https://example.com/genetic-engineering-promise",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 ">
      {datas.map((data, index) => {
        return (
          <div className="w-full md:size-96" key={index}>
            <img src={data.image_url} alt="" className=" " />
            <h2 className="">{data.title}</h2>
            <p className="text-sm text-gray-500">
              By {data.author}, {data.date}
            </p>
            <p className="">{data.description.slice(0, 20)}</p>
            <a href={data.link}>Read more</a>
          </div>
        );
      })}
     
    </div>
  );
};

export default Home;
