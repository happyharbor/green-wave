export const gScrollTo = (id: string) => {
  const element = document.getElementById(id) as HTMLDivElement;
  element.scrollIntoView({
    behavior: 'smooth',
  });
};
