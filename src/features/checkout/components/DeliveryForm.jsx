import { useState } from "react";
import Input from "../../../ui/inputs/Input";
import { FiUser, FiPhone, FiMapPin, FiHome, FiNavigation } from "react-icons/fi";

const DeliveryForm = ({ formData, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...formData, [field]: value });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-charcoal-grey/10 p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-deep-maroon/10 flex items-center justify-center">
          <FiMapPin className="w-5 h-5 text-deep-maroon" />
        </div>
        <h3 className="text-xl font-bold text-charcoal-grey">Delivery Information</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-grey mb-2">
            Full Name <span className="text-deep-maroon">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName || ""}
            onChange={(e) => handleChange("fullName", e.target.value)}
            icon={FiUser}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-grey mb-2">
            Phone Number <span className="text-deep-maroon">*</span>
          </label>
          <Input
            type="tel"
            placeholder="98XXXXXXXX"
            value={formData.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            icon={FiPhone}
            required
          />
        </div>
      </div>

      {/* Delivery Address */}
      <div>
        <label className="block text-sm font-semibold text-charcoal-grey mb-2">
          Delivery Address <span className="text-deep-maroon">*</span>
        </label>
        <Input
          type="text"
          placeholder="Street address, Ward number"
          value={formData.address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          icon={FiHome}
          required
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-grey mb-2">
            City <span className="text-deep-maroon">*</span>
          </label>
          <Input
            type="text"
            placeholder="Kathmandu"
            value={formData.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            icon={FiNavigation}
            required
          />
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-grey mb-2">
            Area <span className="text-deep-maroon">*</span>
          </label>
          <Input
            type="text"
            placeholder="Thamel, New Road, etc."
            value={formData.area || ""}
            onChange={(e) => handleChange("area", e.target.value)}
            icon={FiNavigation}
            required
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-grey mb-2">
            Postal Code
          </label>
          <Input
            type="text"
            placeholder="44600"
            value={formData.postalCode || ""}
            onChange={(e) => handleChange("postalCode", e.target.value)}
          />
        </div>
      </div>

      {/* Delivery Instructions */}
      <div>
        <label className="block text-sm font-semibold text-charcoal-grey mb-2">
          Delivery Instructions (Optional)
        </label>
        <textarea
          placeholder="Any special instructions for delivery..."
          value={formData.instructions || ""}
          onChange={(e) => handleChange("instructions", e.target.value)}
          rows="3"
          className="w-full px-5 py-3 border border-charcoal-grey/12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-golden-amber/25 focus:border-golden-amber/35 text-charcoal-grey bg-charcoal-grey/2 hover:bg-charcoal-grey/4 transition-all duration-300 placeholder:text-charcoal-grey/30 text-sm font-medium shadow-sm hover:shadow-md focus:shadow-lg resize-none"
        />
      </div>
    </div>
  );
};

export default DeliveryForm;

