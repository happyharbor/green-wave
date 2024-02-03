import { useRef } from 'react';
import useVisible from '../../hooks/useVisible.ts';

export default function Index({ children }: { children: React.ReactNode }) {
  const elemRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(elemRef);
  return <div ref={elemRef}>{isVisible && children}</div>;
}
