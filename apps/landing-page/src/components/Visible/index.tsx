import { Suspense, useRef } from 'react';
import useVisible from '../../hooks/useVisible.ts';

export interface VisibleProps {
  children: React.ReactNode;
  height?: number;
}
export default function Index({ children, height }: VisibleProps) {
  const elemRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(elemRef);
  return <div ref={elemRef}>{isVisible && <Suspense fallback={<Outline height={height} />}>{children}</Suspense>}</div>;
}

const Outline = ({ height }: Pick<VisibleProps, 'height'>) => {
  return <div style={{ height }}></div>;
};
