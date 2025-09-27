import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";

const CalendarBooking = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi({ namespace: "atendimento" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      })();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Marcar atendimento</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Marcar Atendimento</DialogTitle>
        </DialogHeader>
        <div className="h-[600px] w-full">
          <Cal
            namespace="atendimento"
            calLink="goncalo-saraiva-oqhgig/atendimento"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarBooking;