export const gScrollTo = (id: string) => {
  const yOffset = -100;
  const element = document.getElementById(id) as HTMLDivElement;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
