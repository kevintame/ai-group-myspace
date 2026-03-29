document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const target = document.querySelector(
      (anchor as HTMLAnchorElement).getAttribute("href")!
    );
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
