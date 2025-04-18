import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFolder, FaFile, FaPencilAlt, FaInfoCircle, FaTools, FaTerminal } from 'react-icons/fa';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const InstallSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-top: 3rem;
`;

const InstallHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InstallForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SelectContainer = styled.div`
  position: relative;
`;

const SelectLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4B5563;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  background-color: #F9FAFB;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  background-color: #F9FAFB;
  font-size: 1rem;
`;

const InstallButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const TerminalContainer = styled.div`
  background-color: #1F2937;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1.5rem;
  font-family: monospace;
  color: #D1D5DB;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const TerminalDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalContent = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const MCPToolsPage = () => {
  const [toolType, setToolType] = useState('Terminal');
  const [instances, setInstances] = useState('1');
  const [isInstalling, setIsInstalling] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstall = () => {
    setIsInstalling(true);
    // Simulate installation process
    setTimeout(() => {
      setIsInstalling(false);
      setIsInstalled(true);
    }, 2000);
  };

  return (
    <>
      <Section
        title="Powerful Filesystem Tools"
        subtitle="Install and manage multiple MCP tools with a single click"
      >
        <ToolsGrid>
          <FeatureCard
            icon={<FaFolder />}
            title="Directory Management"
            description="Create nested directory structures with a single command. Automatically organize your project files."
          />
          <FeatureCard
            icon={<FaFile />}
            title="File Structure Visualization"
            description="Get a clear JSON view of your entire project structure. Understand complex codebases at a glance."
          />
          <FeatureCard
            icon={<FaPencilAlt />}
            title="Smart File Editing"
            description="Make precise line-by-line edits with git-style diff tracking. Perfect for automated refactoring."
          />
          <FeatureCard
            icon={<FaInfoCircle />}
            title="File Metadata Analysis"
            description="Access comprehensive file information without reading content. Optimize your workflow with file insights."
          />
        </ToolsGrid>

        <InstallSection>
          <InstallHeader>
            <FaTools style={{ color: '#6366F1' }} />
            Install MCP Tools
          </InstallHeader>
          <p style={{ marginBottom: '1.5rem', color: '#6B7280' }}>
            Configure and deploy multiple MCP tools with a single click
          </p>

          <InstallForm>
            <div>
              <SelectLabel htmlFor="tool-type">Tool Type</SelectLabel>
              <SelectContainer>
                <Select 
                  id="tool-type" 
                  value={toolType} 
                  onChange={(e) => setToolType(e.target.value)}
                >
                  <option value="Terminal">Terminal</option>
                  <option value="FileManager">File Manager</option>
                  <option value="CodeEditor">Code Editor</option>
                </Select>
              </SelectContainer>
            </div>
            <div>
              <SelectLabel htmlFor="instances">Number of Instances</SelectLabel>
              <Input 
                id="instances" 
                type="number" 
                min="1" 
                max="10" 
                value={instances} 
                onChange={(e) => setInstances(e.target.value)}
              />
            </div>
          </InstallForm>

          <InstallButton 
            variant="primary" 
            onClick={handleInstall} 
            disabled={isInstalling || isInstalled}
          >
            {isInstalling ? 'Installing...' : isInstalled ? 'MCP Tools Installed' : 'Install MCP Tools'}
          </InstallButton>

          {isInstalled && (
            <TerminalContainer>
              <TerminalHeader>
                <TerminalDot color="#EF4444" />
                <TerminalDot color="#F59E0B" />
                <TerminalDot color="#10B981" />
                <span style={{ marginLeft: '0.5rem' }}>Terminal</span>
              </TerminalHeader>
              <TerminalContent>
                Ready to install MCP tools...
              </TerminalContent>
            </TerminalContainer>
          )}
        </InstallSection>
      </Section>
    </>
  );
};

export default MCPToolsPage;
