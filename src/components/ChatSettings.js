import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaUserCog, FaServer, FaDesktop, FaCog, FaPaintBrush } from 'react-icons/fa';

const SettingsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: flex-end;
`;

const SettingsPanel = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  overflow-y: auto;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #E5E7EB;
`;

const SettingsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  font-size: 1.25rem;
  
  &:hover {
    color: #111827;
  }
`;

const SettingsContent = styled.div`
  padding: 1.5rem;
`;

const SettingSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SettingRow = styled.div`
  margin-bottom: 1.25rem;
`;

const SettingLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4B5563;
  margin-bottom: 0.5rem;
`;

const SettingSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  background-color: white;
  font-size: 0.875rem;
  color: #111827;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #6366F1;
  }
  
  &:checked + span:before {
    transform: translateX(24px);
  }
  
  &:focus + span {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D1D5DB;
  transition: 0.4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SettingToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4B5563;
`;

const ChatSettings = ({ isOpen, onClose }) => {
  return (
    <SettingsOverlay isOpen={isOpen}>
      <SettingsPanel>
        <SettingsHeader>
          <SettingsTitle>AI Chat Settings</SettingsTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </SettingsHeader>
        
        <SettingsContent>
          <SettingSection>
            <SectionTitle>
              <FaUserCog />
              User Preferences
            </SectionTitle>
            
            <SettingRow>
              <SettingLabel htmlFor="language">Interface Language</SettingLabel>
              <SettingSelect id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </SettingSelect>
            </SettingRow>
            
            <SettingRow>
              <SettingToggle>
                <ToggleLabel>Enable sound effects</ToggleLabel>
                <ToggleSwitch>
                  <ToggleInput type="checkbox" checked={false} />
                  <ToggleSlider />
                </ToggleSwitch>
              </SettingToggle>
            </SettingRow>
          </SettingSection>
          
          <SettingSection>
            <SectionTitle>
              <FaServer />
              MCP Server Settings
            </SectionTitle>
            
            <SettingRow>
              <SettingLabel htmlFor="server">MCP Server Region</SettingLabel>
              <SettingSelect id="server">
                <option value="us-east">US East (Default)</option>
                <option value="us-west">US West</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia Pacific</option>
              </SettingSelect>
            </SettingRow>
            
            <SettingRow>
              <SettingToggle>
                <ToggleLabel>Auto-connect to MCP servers</ToggleLabel>
                <ToggleSwitch>
                  <ToggleInput type="checkbox" checked={true} />
                  <ToggleSlider />
                </ToggleSwitch>
              </SettingToggle>
            </SettingRow>
          </SettingSection>
          
          <SettingSection>
            <SectionTitle>
              <FaDesktop />
              Display Settings
            </SectionTitle>
            
            <SettingRow>
              <SettingLabel htmlFor="theme">Color Theme</SettingLabel>
              <SettingSelect id="theme">
                <option value="light">Light (Default)</option>
                <option value="dark">Dark</option>
                <option value="system">System Preference</option>
              </SettingSelect>
            </SettingRow>
            
            <SettingRow>
              <SettingLabel htmlFor="codeTheme">Code Theme</SettingLabel>
              <SettingSelect id="codeTheme">
                <option value="default">Default</option>
                <option value="monokai">Monokai</option>
                <option value="github">GitHub</option>
                <option value="dracula">Dracula</option>
              </SettingSelect>
            </SettingRow>
            
            <SettingRow>
              <SettingToggle>
                <ToggleLabel>Show timestamps on messages</ToggleLabel>
                <ToggleSwitch>
                  <ToggleInput type="checkbox" checked={false} />
                  <ToggleSlider />
                </ToggleSwitch>
              </SettingToggle>
            </SettingRow>
          </SettingSection>
          
          <SettingSection>
            <SectionTitle>
              <FaPaintBrush />
              Customization
            </SectionTitle>
            
            <SettingRow>
              <SettingLabel htmlFor="codeFont">Code Font</SettingLabel>
              <SettingSelect id="codeFont">
                <option value="monospace">Monospace (Default)</option>
                <option value="fira">Fira Code</option>
                <option value="source">Source Code Pro</option>
                <option value="consolas">Consolas</option>
              </SettingSelect>
            </SettingRow>
            
            <SettingRow>
              <SettingToggle>
                <ToggleLabel>Compact message view</ToggleLabel>
                <ToggleSwitch>
                  <ToggleInput type="checkbox" checked={false} />
                  <ToggleSlider />
                </ToggleSwitch>
              </SettingToggle>
            </SettingRow>
          </SettingSection>
        </SettingsContent>
      </SettingsPanel>
    </SettingsOverlay>
  );
};

export default ChatSettings;
