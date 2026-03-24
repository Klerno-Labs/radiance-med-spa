"use client";

import type { Service } from "@/types/services"; // Fixed: Import missing type
import { cn } from "@/lib/utils";

interface BookingWizardProps {
  onBook: (service: Service, date: string) => void;
}

export function BookingWizard({ onBook }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [date, setDate] = useState("");

  const services: Service[] = [
    { id: 1, name: "Botox Injection", price: 350, description: "Professional wrinkle reduction." },
    { id: 2, name: "Dermal Fillers", price: 650, description: "Restore volume and contour." },
    { id: 3, name: "Laser Skin Resurfacing", price: 400, description: "Smooth and rejuvenate skin." },
  ];

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className={step >= 1 ? "text-primary font-bold" : ""}>Select Service</span>
          <span className={step >= 2 ? "text-primary font-bold" : ""}>Select Date</span>
        </div>
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              className={cn(
                "p-4 border rounded-lg cursor-pointer transition-all hover:border-primary",
                selectedService?.id === service.id && "border-primary bg-primary/5"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <span className="font-bold text-primary">${service.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {step === 2 && selectedService && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={handleDateSelect}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <button
            onClick={() => onBook(selectedService, date)}
            disabled={!date}
            className={cn(
              "w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-[#3d6b4a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}