import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Save, Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import { toast } from 'sonner';

interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  businessHours: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  website: string;
}

const SiteSettingsEditor = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<SiteSettings>({
    siteName: '',
    tagline: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    businessHours: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    website: ''
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      const response = await fetch(`${API_URL}/content/siteSettings`);
      const data = await response.json();
      
      if (data && data.data) {
        setFormData({
          siteName: data.data.siteName || 'AgroFeed',
          tagline: data.data.tagline || 'Premium Animal Feed Products',
          contactEmail: data.data.contactEmail || '',
          contactPhone: data.data.contactPhone || '',
          address: data.data.address || '',
          city: data.data.city || '',
          state: data.data.state || '',
          zipCode: data.data.zipCode || '',
          country: data.data.country || '',
          businessHours: data.data.businessHours || '',
          facebook: data.data.facebook || '',
          twitter: data.data.twitter || '',
          instagram: data.data.instagram || '',
          linkedin: data.data.linkedin || '',
          website: data.data.website || ''
        });
      }
      toast.success('Settings loaded!');
    } catch (error: any) {
      console.error('Error loading settings:', error);
      // Load default settings
      setFormData({
        siteName: 'AgroFeed',
        tagline: 'Premium Animal Feed Products',
        contactEmail: 'info@agrofeed.com',
        contactPhone: '+1 (555) 123-4567',
        address: '123 Farm Road',
        city: 'Agricultural District',
        state: 'CA',
        zipCode: '90210',
        country: 'USA',
        businessHours: 'Mon-Fri: 8AM-6PM',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        website: ''
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      
      const response = await fetch(`${API_URL}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'siteSettings',
          data: formData
        })
      });
      
      if (response.ok) {
        toast.success('Site settings saved successfully!');
      } else {
        toast.error('Failed to save settings');
      }
    } catch (error: any) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Site Settings</h2>
        <p className="text-gray-500">Manage your website configuration and contact information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <CardTitle>Basic Information</CardTitle>
            </div>
            <CardDescription>General website and company information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Site Name</Label>
                <Input
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                  placeholder="AgroFeed"
                />
              </div>
              <div>
                <Label>Tagline</Label>
                <Input
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Premium Animal Feed Products"
                />
              </div>
            </div>
            <div>
              <Label>Website URL</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://agrofeed.com"
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <CardTitle>Contact Information</CardTitle>
            </div>
            <CardDescription>How customers can reach you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Contact Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="info@agrofeed.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label>Contact Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <div>
              <Label>Business Hours</Label>
              <Input
                value={formData.businessHours}
                onChange={(e) => setFormData({ ...formData, businessHours: e.target.value })}
                placeholder="Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
              />
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <CardTitle>Business Address</CardTitle>
            </div>
            <CardDescription>Your physical location</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Street Address</Label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="123 Farm Road"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>City</Label>
                <Input
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Agricultural District"
                />
              </div>
              <div>
                <Label>State</Label>
                <Input
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="CA"
                />
              </div>
              <div>
                <Label>ZIP Code</Label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  placeholder="90210"
                />
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="USA"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Social Media Links</CardTitle>
            </div>
            <CardDescription>Connect with customers on social media</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>
                  <Facebook className="inline h-4 w-4 mr-2" />
                  Facebook URL
                </Label>
                <Input
                  value={formData.facebook}
                  onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <Label>
                  <Twitter className="inline h-4 w-4 mr-2" />
                  Twitter URL
                </Label>
                <Input
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div>
                <Label>
                  <Instagram className="inline h-4 w-4 mr-2" />
                  Instagram URL
                </Label>
                <Input
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="https://instagram.com/yourprofile"
                />
              </div>
              <div>
                <Label>
                  <Linkedin className="inline h-4 w-4 mr-2" />
                  LinkedIn URL
                </Label>
                <Input
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={saving} size="lg">
            {saving ? (
              <>
                <span className="mr-2">⏳</span>
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SiteSettingsEditor;
