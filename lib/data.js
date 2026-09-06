export let project = async () => {
  try {
    let projectsUrl = process.env.NEXT_PUBLIC_API_PROJECTS;
    if (!projectsUrl) {
      console.warn("NEXT_PUBLIC_API_PROJECTS is not defined.");
      return [];
    }

    let res = await fetch(projectsUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    let data = await res.json();
    let rawList = Array.isArray(data) ? data : (data.projects || []);

    return rawList.map((item) => ({
      ...item,
      id: item.id || item._id,
      title: item.title,
      shortDesc: item.shortDesc || item.subtitle || item.desc || "",
      image:
        (Array.isArray(item.images) && item.images.length > 0
          ? item.images[0]
          : item.image) || "/ArtHub.png",
      tags: item.tags || item.tech || [],
      liveLink: item.liveLink || item.liveUrl || "#",
      githubLink: item.githubLink || item.githubUrl || "#",
    }));
  } catch (error) {
    console.error("Error fetching projects from API:", error);
    return [];
  }
};

