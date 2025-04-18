import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaRobot, FaUser, FaCog, FaRegCopy, FaCheck, FaThumbsUp, FaThumbsDown, FaServer } from 'react-icons/fa';
import ErrorAlert from '../components/ErrorAlert';
import ChatSettings from '../components/ChatSettings';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
  background-color: #F9FAFB;
`;

const ChatHeader = styled.div`
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const SettingsButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #111827;
  }
`;

const ServerStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isConnected ? '#10B981' : '#EF4444'};
  font-size: 0.875rem;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.isConnected ? '#10B981' : '#EF4444'};
  animation: ${props => props.isConnected ? 'none' : 'pulse 2s infinite'};
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Message = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 80%;
  
  ${props => props.isUser ? `
    align-self: flex-end;
    flex-direction: row-reverse;
  ` : `
    align-self: flex-start;
  `}
`;

const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.isUser ? '#6366F1' : '#10B981'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  background-color: ${props => props.isUser ? '#EEF2FF' : 'white'};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  
  pre {
    background-color: #F3F4F6;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    position: relative;
    margin: 1rem 0;
  }
  
  code {
    font-family: monospace;
    font-size: 0.875rem;
  }
`;

const CodeBlock = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E5E7EB;
  padding: 0.5rem 1rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  font-size: 0.75rem;
  color: #4B5563;
`;

const CodeLanguage = styled.span`
  font-weight: 500;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  
  &:hover {
    color: #111827;
  }
`;

const CodeContent = styled.pre`
  background-color: #F3F4F6;
  padding: 1rem;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  overflow-x: auto;
  margin: 0;
  
  code {
    font-family: monospace;
    font-size: 0.875rem;
  }
`;

const MessageFeedback = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const FeedbackButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.isPositive ? '#10B981' : '#EF4444'};
  }
  
  ${props => props.isActive && props.isPositive && `
    color: #10B981;
  `}
  
  ${props => props.isActive && !props.isPositive && `
    color: #EF4444;
  `}
`;

const ChatFooter = styled.div`
  padding: 1rem 2rem;
  background-color: white;
  border-top: 1px solid #E5E7EB;
`;

const MessageForm = styled.form`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

const MessageInput = styled.textarea`
  flex: 1;
  padding: 0.75rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  resize: none;
  font-family: inherit;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  background-color: #6366F1;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #4F46E5;
  }
  
  &:disabled {
    background-color: #A5B4FC;
    cursor: not-allowed;
  }
`;

const SystemMessage = styled.div`
  text-align: center;
  color: #6B7280;
  font-size: 0.875rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello! I'm your AI coding companion. How can I help you build your application today?", isUser: false, timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({});
  const [copiedCode, setCopiedCode] = useState(null);
  const [errorAlert, setErrorAlert] = useState({
    isVisible: false,
    title: '',
    message: '',
    type: 'error'
  });
  const [serverStatus, setServerStatus] = useState({
    isConnected: true,
    message: 'MCP Servers Connected'
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  const messageEndRef = useRef(null);
  const inputRef = useRef(null);
  
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
    
    // Auto resize the textarea
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
  };
  
  const showErrorAlert = (title, message, type = 'error') => {
    setErrorAlert({
      isVisible: true,
      title,
      message,
      type
    });
  };
  
  const handleCloseErrorAlert = () => {
    setErrorAlert(prev => ({ ...prev, isVisible: false }));
  };
  
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    // Validate input
    if (input.length > 1000) {
      showErrorAlert(
        'Message too long',
        'Please keep your message under 1000 characters',
        'warning'
      );
      return;
    }
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      content: input.trim(),
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }
    
    // Simulate AI response
    setIsLoading(true);
    
    // Simulate server connection error if message contains 'error test'
    if (input.toLowerCase().includes('error test')) {
      setTimeout(() => {
        setServerStatus({
          isConnected: false,
          message: 'MCP Servers Disconnected'
        });
        
        showErrorAlert(
          'Connection failed',
          'Failed to connect to MCP servers. Please try again.',
          'error'
        );
        setIsLoading(false);
        
        // Simulate reconnection after 5 seconds
        setTimeout(() => {
          setServerStatus({
            isConnected: true,
            message: 'MCP Servers Connected'
          });
        }, 5000);
      }, 1500);
      return;
    }
    
    // Simulate server validation error if message contains 'invalid'
    if (input.toLowerCase().includes('invalid')) {
      setTimeout(() => {
        showErrorAlert(
          'Invalid request',
          'Your request contains invalid parameters. Please check your input and try again.',
          'warning'
        );
        setIsLoading(false);
      }, 1500);
      return;
    }
    
    setTimeout(() => {
      let aiResponse;
      
      // Simulate different responses based on user input
      if (input.toLowerCase().includes('create') || input.toLowerCase().includes('build')) {
        aiResponse = {
          id: Date.now() + 1,
          content: `I'd be happy to help you create that! Here's a starting point:
          
<code language="javascript">
// App.js
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from your MCP server
    fetch('https://api.zerocode.ai/data')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>My Zero Code App</h1>
      </header>
      <main>
        {data.map(item => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
</code>

Is there anything specific you'd like me to customize about this component?`,
          isUser: false,
          timestamp: new Date()
        };
      } else if (input.toLowerCase().includes('error') || input.toLowerCase().includes('fix')) {
        aiResponse = {
          id: Date.now() + 1,
          content: `I noticed the issue. You're missing the useEffect import. Let's fix that:
          
<code language="javascript">
// Corrected App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from your MCP server
    fetch('https://api.zerocode.ai/data')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>My Zero Code App</h1>
      </header>
      <main>
        {data.map(item => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
</code>

Now the code should work correctly. The useEffect hook needs to be imported from React.`,
          isUser: false,
          timestamp: new Date()
        };
      } else if (input.toLowerCase().includes('mcp') || input.toLowerCase().includes('server')) {
        aiResponse = {
          id: Date.now() + 1,
          content: `To connect to the Zero Code MCP servers, you'll need to use the following configuration:

<code language="javascript">
// MCP Server Connection
const MCPConfig = {
  apiKey: 'YOUR_API_KEY',
  endpoint: 'https://api.zerocode.ai/mcp',
  version: 'v1',
  timeout: 30000 // 30 seconds
};

const connectToMCP = async () => {
  try {
    const response = await fetch(MCPConfig.endpoint + '/' + MCPConfig.version + '/connect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + MCPConfig.apiKey
      },
      body: JSON.stringify({
        clientVersion: '1.0.0',
        capabilities: ['webApp', 'dataStorage', 'authentication']
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to connect to MCP servers');
    }
    
    const data = await response.json();
    console.log('Connected to MCP:', data);
    return data;
  } catch (error) {
    console.error('MCP connection error:', error);
    throw error;
  }
};

// Usage
connectToMCP()
  .then(connection => {
    // Initialize your app with the MCP connection
    initializeApp(connection);
  })
  .catch(error => {
    // Handle connection error
    showError('Failed to connect to MCP servers');
  });
</code>

You'll need to replace 'YOUR_API_KEY' with your actual API key from the Zero Code dashboard. Would you like me to explain how to obtain an API key?`,
          isUser: false,
          timestamp: new Date()
        };
      } else {
        aiResponse = {
          id: Date.now() + 1,
          content: `I'm here to help you build applications using Zero Code's MCP servers. You can ask me to:

1. Create new components or features
2. Debug existing code
3. Explain how to implement specific functionality
4. Connect your application to MCP servers
5. Generate an entire application structure

What would you like to build today?`,
          isUser: false,
          timestamp: new Date()
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleFeedback = (messageId, isPositive) => {
    setFeedback(prev => ({
      ...prev,
      [messageId]: isPositive
    }));
  };
  
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    
    setTimeout(() => {
      if (setCopiedCode && code === copiedCode) {
        setCopiedCode(null);
      }
    }, 2000);
  };
  
  // Function to render code blocks within messages
  const renderMessageContent = (content) => {
    if (!content.includes('<code')) {
      return <p>{content}</p>;
    }
    
    const parts = content.split(/(<code.*?>|<\/code>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<code')) {
        // Extract language if specified
        const languageMatch = part.match(/language="([^"]*)"/);
        const language = languageMatch ? languageMatch[1] : 'plaintext';
        
        // Get the code content (next part in the array)
        const codeContent = parts[index + 1];
        
        return (
          <CodeBlock key={index}>
            <CodeHeader>
              <CodeLanguage>{language}</CodeLanguage>
              <CopyButton 
                onClick={() => handleCopyCode(codeContent)}
                title="Copy code"
              >
                {copiedCode === codeContent ? (
                  <>
                    <FaCheck size={12} />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaRegCopy size={12} />
                    Copy
                  </>
                )}
              </CopyButton>
            </CodeHeader>
            <CodeContent>
              <code>{codeContent}</code>
            </CodeContent>
          </CodeBlock>
        );
      } else if (!part.startsWith('</code>') && part !== '') {
        return <p key={index}>{part}</p>;
      }
      return null;
    });
  };
  
  return (
    <ChatContainer>
      <ErrorAlert
        type={errorAlert.type}
        title={errorAlert.title}
        message={errorAlert.message}
        isVisible={errorAlert.isVisible}
        onClose={handleCloseErrorAlert}
      />
      
      <ChatSettings isOpen={settingsOpen} onClose={toggleSettings} />
      
      <ChatHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ChatTitle>Zero Code AI Chat</ChatTitle>
          <ServerStatus isConnected={serverStatus.isConnected}>
            <StatusDot isConnected={serverStatus.isConnected} />
            {serverStatus.message}
          </ServerStatus>
        </div>
        <SettingsButton onClick={toggleSettings}>
          <FaCog />
          Settings
        </SettingsButton>
      </ChatHeader>
      
      <ChatBody>
        {messages.map((message) => (
          <Message key={message.id} isUser={message.isUser}>
            <MessageAvatar isUser={message.isUser}>
              {message.isUser ? <FaUser /> : <FaRobot />}
            </MessageAvatar>
            <div>
              <MessageContent isUser={message.isUser}>
                {renderMessageContent(message.content)}
              </MessageContent>
              
              {!message.isUser && (
                <MessageFeedback>
                  <FeedbackButton 
                    isPositive={true} 
                    isActive={feedback[message.id] === true}
                    onClick={() => handleFeedback(message.id, true)}
                    title="Helpful"
                  >
                    <FaThumbsUp />
                  </FeedbackButton>
                  <FeedbackButton 
                    isPositive={false} 
                    isActive={feedback[message.id] === false}
                    onClick={() => handleFeedback(message.id, false)}
                    title="Not helpful"
                  >
                    <FaThumbsDown />
                  </FeedbackButton>
                </MessageFeedback>
              )}
            </div>
          </Message>
        ))}
        
        {isLoading && (
          <SystemMessage>Zero Code AI is thinking...</SystemMessage>
        )}
        
        <div ref={messageEndRef} />
      </ChatBody>
      
      <ChatFooter>
        <MessageForm onSubmit={handleSubmit}>
          <MessageInput
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            rows={1}
          />
          <SendButton 
            type="submit" 
            disabled={!input.trim() || isLoading}
            title="Send message"
          >
            <FaPaperPlane size={14} />
          </SendButton>
        </MessageForm>
      </ChatFooter>
    </ChatContainer>
  );
};

export default ChatPage;
