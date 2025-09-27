import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    retell?: {
      open: () => void;
    };
  }
}

const RetellChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Retell script dynamically
    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget.js';
    script.type = 'module';
    script.setAttribute('data-public-key', 'public_key_abbfa4101d786609ae794');
    script.setAttribute('data-agent-id', 'agent_10831af0b6e080a3e1cccd26fe');
    script.setAttribute('data-agent-version', '0');
    script.setAttribute('data-title', 'Assistente ElectroHub');
    
    if (!document.getElementById('retell-widget')) {
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('retell-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Trigger Retell widget
    if (window.retell) {
      window.retell.open();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleChat}
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default RetellChatbot;