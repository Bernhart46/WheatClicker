import { useCallback, useEffect, useState } from 'react';
import { Tool } from './Tool';
import { keyDownType } from './ToolsTypes';
import './ToolsWindow.css';

export const ToolsWindow = () => {
  const [keyDown, setKeyDown] = useState<keyDownType>('');
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.ctrlKey) return;
      if (e.shiftKey && keyDown === 'Shift') {
        setKeyDown('');
        return;
      }
      if (e.ctrlKey && keyDown === 'CTRL') {
        setKeyDown('');
        return;
      }
      if (e.shiftKey) {
        setKeyDown('Shift');
        return;
      }
      if (e.ctrlKey) {
        setKeyDown('CTRL');
        return;
      }
    },
    [keyDown]
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="tools-window">
      <Tool name="stick" keyDown={keyDown} />
      <Tool name="shovel" keyDown={keyDown} />
      <Tool name="rake" keyDown={keyDown} />
      <Tool name="hoe" keyDown={keyDown} />
    </div>
  );
};
