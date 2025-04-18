import React from 'react';
import styled from 'styled-components';

const ScreenshotContainer = styled.div`
  position: relative;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`;

const Screenshot = styled.div`
  background-color: #1E293B;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  width: 80%;
  max-width: 1000px;
`;

const ScreenshotHeader = styled.div`
  background-color: #0F172A;
  padding: 0.75rem;
  display: flex;
  align-items: center;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const WindowControl = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ScreenshotTitle = styled.div`
  color: #CBD5E1;
  font-size: 0.875rem;
  margin-left: 1rem;
`;

const ScreenshotContent = styled.div`
  padding: 1.5rem;
  color: #E2E8F0;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  height: 400px;
  overflow-y: auto;
`;

const SidePanel = styled.div`
  background-color: #0F172A;
  width: 200px;
  border-right: 1px solid #334155;
  padding: 1rem;
  height: 100%;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ContentArea = styled.div`
  display: flex;
  height: 400px;
`;

const NavigationItem = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 4px;
  color: ${props => props.active ? '#E2E8F0' : '#94A3B8'};
  background-color: ${props => props.active ? '#334155' : 'transparent'};
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.active ? '#334155' : '#1E293B'};
  }
`;

const CodeArea = styled.div`
  background-color: #1E293B;
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
`;

const CodeLine = styled.div`
  position: relative;
  display: flex;
`;

const LineNumber = styled.div`
  color: #64748B;
  width: 2rem;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.5rem;
`;

const LineContent = styled.div`
  color: ${props => {
    switch (props.type) {
      case 'keyword': return '#93C5FD';
      case 'string': return '#86EFAC';
      case 'comment': return '#64748B';
      case 'function': return '#F9A8D4';
      default: return '#E2E8F0';
    }
  }};
`;

// Generated code example for Zero Code app
const codeLines = [
  { number: 1, content: 'import React, { useState } from "react";', type: 'keyword' },
  { number: 2, content: '', type: 'normal' },
  { number: 3, content: '// Zero Code Generated Component', type: 'comment' },
  { number: 4, content: 'function TaskManager() {', type: 'function' },
  { number: 5, content: '  const [tasks, setTasks] = useState([]);', type: 'keyword' },
  { number: 6, content: '  const [newTask, setNewTask] = useState("");', type: 'keyword' },
  { number: 7, content: '', type: 'normal' },
  { number: 8, content: '  const addTask = () => {', type: 'function' },
  { number: 9, content: '    if (newTask.trim() === "") return;', type: 'normal' },
  { number: 10, content: '    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);', type: 'normal' },
  { number: 11, content: '    setNewTask("");', type: 'normal' },
  { number: 12, content: '  };', type: 'normal' },
  { number: 13, content: '', type: 'normal' },
  { number: 14, content: '  const toggleTask = (id) => {', type: 'function' },
  { number: 15, content: '    setTasks(', type: 'normal' },
  { number: 16, content: '      tasks.map((task) =>', type: 'normal' },
  { number: 17, content: '        task.id === id ? { ...task, completed: !task.completed } : task', type: 'normal' },
  { number: 18, content: '      )', type: 'normal' },
  { number: 19, content: '    );', type: 'normal' },
  { number: 20, content: '  };', type: 'normal' },
  { number: 21, content: '', type: 'normal' },
  { number: 22, content: '  const deleteTask = (id) => {', type: 'function' },
  { number: 23, content: '    setTasks(tasks.filter((task) => task.id !== id));', type: 'normal' },
  { number: 24, content: '  };', type: 'normal' },
  { number: 25, content: '', type: 'normal' },
  { number: 26, content: '  return (', type: 'keyword' },
  { number: 27, content: '    <div className="task-manager">', type: 'string' },
  { number: 28, content: '      <h1>Task Manager</h1>', type: 'string' },
  { number: 29, content: '      <div className="add-task">', type: 'string' },
  { number: 30, content: '        <input', type: 'normal' },
  { number: 31, content: '          type="text"', type: 'string' },
  { number: 32, content: '          value={newTask}', type: 'normal' },
  { number: 33, content: '          onChange={(e) => setNewTask(e.target.value)}', type: 'normal' },
  { number: 34, content: '          placeholder="Add a new task..."', type: 'string' },
  { number: 35, content: '        />', type: 'normal' },
  { number: 36, content: '        <button onClick={addTask}>Add</button>', type: 'string' },
  { number: 37, content: '      </div>', type: 'string' },
  { number: 38, content: '      {/* Task list */}', type: 'comment' },
  { number: 39, content: '      <ul className="task-list">', type: 'string' },
  { number: 40, content: '        {tasks.map((task) => (', type: 'normal' },
];

const AppScreenshot = () => {
  return (
    <ScreenshotContainer>
      <Screenshot>
        <ScreenshotHeader>
          <WindowControls>
            <WindowControl color="#FF5F56" />
            <WindowControl color="#FFBD2E" />
            <WindowControl color="#27C93F" />
          </WindowControls>
          <ScreenshotTitle>Zero Code - Task Manager App</ScreenshotTitle>
        </ScreenshotHeader>
        <ContentArea>
          <SidePanel>
            <NavigationItem>Project Files</NavigationItem>
            <NavigationItem active>TaskManager.js</NavigationItem>
            <NavigationItem>styles.css</NavigationItem>
            <NavigationItem>index.js</NavigationItem>
            <NavigationItem>package.json</NavigationItem>
          </SidePanel>
          <MainContent>
            <CodeArea>
              {codeLines.map((line) => (
                <CodeLine key={line.number}>
                  <LineNumber>{line.number}</LineNumber>
                  <LineContent type={line.type}>{line.content}</LineContent>
                </CodeLine>
              ))}
            </CodeArea>
          </MainContent>
        </ContentArea>
      </Screenshot>
    </ScreenshotContainer>
  );
};

export default AppScreenshot;
