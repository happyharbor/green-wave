export const gScrollTo = (id: string) => {
  const yOffset = -109;
  const element = document.getElementById(id) as HTMLDivElement;
  let top = element.getBoundingClientRect().top;
  let scrollY = window.scrollY;
  const y = top + scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
