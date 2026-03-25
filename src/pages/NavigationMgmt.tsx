import { useState } from 'react';
import { toast } from 'sonner';

const NavigationMgmt = () => {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Navigation changes saved!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-[#00450d]">Navigation Management</h3>
          <p className="text-sm text-[#717a6d] mt-1">Manage main navigation menu items and structure</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2 bg-[#1b5e20] text-white font-semibold rounded-lg hover:bg-[#00450d] transition-all disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-sm">save</span>
          <span>{loading ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <p className="text-[#41493e] text-center py-12">Navigation Management module coming soon...</p>
      </div>
    </div>
  );
};

export default NavigationMgmt;
