import { useState } from 'react';
import { useCMS } from '../contexts/CMSContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { Save, Plus, X, Trash2, Edit } from 'lucide-react';
import { toast } from 'sonner';

const CMSManagement = () => {
  const { cmsData, updateHero, updateAbout, updateTestimonials, updateEnquiry, updateSiteSettings } = useCMS();
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-grid lg:grid-cols-5">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="enquiry">Enquiry</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4">
          <HeroEditor data={cmsData.hero} onSave={updateHero} />
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <AboutEditor data={cmsData.about} onSave={updateAbout} />
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-4">
          <TestimonialsEditor data={cmsData.testimonials} onSave={updateTestimonials} />
        </TabsContent>

        <TabsContent value="enquiry" className="space-y-4">
          <EnquiryEditor data={cmsData.enquiry} onSave={updateEnquiry} />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <SettingsEditor data={cmsData.siteSettings} onSave={updateSiteSettings} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Hero Editor Component
const HeroEditor = ({ data, onSave }: { data: any; onSave: (data: any) => void }) => {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('Hero section updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
        <CardDescription>Edit the main hero section content</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Badge Text</Label>
              <Input value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} />
            </div>
            <div>
              <Label>Background Image</Label>
              <Input value={formData.backgroundImage} onChange={(e) => setFormData({ ...formData, backgroundImage: e.target.value })} />
            </div>
          </div>
          <div>
            <Label>Title</Label>
            <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          </div>
          <div>
            <Label>Subtitle</Label>
            <textarea
              className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Primary Button Text</Label>
              <Input value={formData.primaryButtonText} onChange={(e) => setFormData({ ...formData, primaryButtonText: e.target.value })} />
            </div>
            <div>
              <Label>Secondary Button Text</Label>
              <Input value={formData.secondaryButtonText} onChange={(e) => setFormData({ ...formData, secondaryButtonText: e.target.value })} />
            </div>
          </div>
          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save Hero Section
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// About Editor Component
const AboutEditor = ({ data, onSave }: { data: any; onSave: (data: any) => void }) => {
  const [formData, setFormData] = useState(data);
  const [editingFeature, setEditingFeature] = useState<number | null>(null);
  const [newStat, setNewStat] = useState({ value: '', label: '' });

  const handleFeatureSave = (index: number, feature: any) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = feature;
    setFormData({ ...formData, features: newFeatures });
    setEditingFeature(null);
  };

  const handleAddStat = () => {
    if (newStat.value && newStat.label) {
      setFormData({
        ...formData,
        stats: [...formData.stats, { id: Date.now().toString(), ...newStat }],
      });
      setNewStat({ value: '', label: '' });
    }
  };

  const handleDeleteStat = (index: number) => {
    setFormData({
      ...formData,
      stats: formData.stats.filter((_: any, i: number) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('About section updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>About Section</CardTitle>
        <CardDescription>Edit about section content and features</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">General Content</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Badge</Label>
                <Input value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} />
              </div>
            </div>
            <div>
              <Label>Title</Label>
              <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div>
              <Label>Subtitle</Label>
              <textarea
                className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Features</h3>
            {formData.features.map((feature: any, index: number) => (
              <div key={feature.id || index} className="border rounded-lg p-4 bg-gray-50">
                {editingFeature === index ? (
                  <div className="space-y-3">
                    <Input value={feature.title} onChange={(e) => setFormData({
                      ...formData,
                      features: formData.features.map((f: any, i: number) => i === index ? { ...f, title: e.target.value } : f),
                    })} placeholder="Title" />
                    <Input value={feature.description} onChange={(e) => setFormData({
                      ...formData,
                      features: formData.features.map((f: any, i: number) => i === index ? { ...f, description: e.target.value } : f),
                    })} placeholder="Description" />
                    <Input value={feature.image} onChange={(e) => setFormData({
                      ...formData,
                      features: formData.features.map((f: any, i: number) => i === index ? { ...f, image: e.target.value } : f),
                    })} placeholder="Image URL" />
                    <Input value={feature.icon} onChange={(e) => setFormData({
                      ...formData,
                      features: formData.features.map((f: any, i: number) => i === index ? { ...f, icon: e.target.value } : f),
                    })} placeholder="Icon (Leaf, Award, Sprout)" />
                    <div className="flex gap-2">
                      <Button type="button" size="sm" onClick={() => handleFeatureSave(index, feature)}>Save</Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => setEditingFeature(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setEditingFeature(index)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Stats</h3>
            {formData.stats.map((stat: any, index: number) => (
              <div key={stat.id || index} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs">Value</Label>
                    <p className="font-medium">{stat.value}</p>
                  </div>
                  <div>
                    <Label className="text-xs">Label</Label>
                    <p className="font-medium">{stat.label}</p>
                  </div>
                </div>
                <Button type="button" variant="ghost" size="sm" onClick={() => handleDeleteStat(index)}>
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            ))}
            <div className="flex gap-2">
              <Input placeholder="Value (e.g., 15+)" value={newStat.value} onChange={(e) => setNewStat({ ...newStat, value: e.target.value })} />
              <Input placeholder="Label (e.g., Years Experience)" value={newStat.label} onChange={(e) => setNewStat({ ...newStat, label: e.target.value })} />
              <Button type="button" onClick={handleAddStat}><Plus className="h-4 w-4" /></Button>
            </div>
          </div>

          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save About Section
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Testimonials Editor Component
const TestimonialsEditor = ({ data, onSave }: { data: any; onSave: (data: any) => void }) => {
  const [formData, setFormData] = useState(data);
  const [editingTestimonial, setEditingTestimonial] = useState<number | null>(null);

  const handleTestimonialSave = (index: number, testimonial: any) => {
    const newTestimonials = [...formData.testimonials];
    newTestimonials[index] = testimonial;
    setFormData({ ...formData, testimonials: newTestimonials });
    setEditingTestimonial(null);
    toast.success('Testimonial updated!');
  };

  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: 'New Customer',
      role: 'Customer Role',
      content: 'Testimonial content here...',
      rating: 5,
      avatar: 'NC',
    };
    setFormData({
      ...formData,
      testimonials: [...formData.testimonials, newTestimonial],
    });
    setEditingTestimonial(formData.testimonials.length);
  };

  const handleDeleteTestimonial = (index: number) => {
    setFormData({
      ...formData,
      testimonials: formData.testimonials.filter((_: any, i: number) => i !== index),
    });
    toast.success('Testimonial deleted!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('Testimonials section updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Testimonials Section</CardTitle>
        <CardDescription>Manage customer testimonials</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Badge</Label>
                <Input value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} />
              </div>
              <div>
                <Label>Title</Label>
                <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Testimonials</h3>
              <Button type="button" size="sm" onClick={handleAddTestimonial}>
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </div>

            {formData.testimonials.map((testimonial: any, index: number) => (
              <div key={testimonial.id || index} className="border rounded-lg p-4 bg-gray-50">
                {editingTestimonial === index ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <Input value={testimonial.name} onChange={(e) => setFormData({
                        ...formData,
                        testimonials: formData.testimonials.map((t: any, i: number) => i === index ? { ...t, name: e.target.value } : t),
                      })} placeholder="Name" />
                      <Input value={testimonial.role} onChange={(e) => setFormData({
                        ...formData,
                        testimonials: formData.testimonials.map((t: any, i: number) => i === index ? { ...t, role: e.target.value } : t),
                      })} placeholder="Role" />
                    </div>
                    <textarea
                      className="w-full min-h-[80px] px-3 py-2 border rounded-lg"
                      value={testimonial.content}
                      onChange={(e) => setFormData({
                        ...formData,
                        testimonials: formData.testimonials.map((t: any, i: number) => i === index ? { ...t, content: e.target.value } : t),
                      })}
                      placeholder="Content"
                    />
                    <div className="flex items-center gap-4">
                      <Label>Rating:</Label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              testimonials: formData.testimonials.map((t: any, i: number) => i === index ? { ...t, rating } : t),
                            })}
                            className={`text-xl ${rating <= testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button type="button" size="sm" onClick={() => handleTestimonialSave(index, testimonial)}>Save</Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => setEditingTestimonial(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{testimonial.name} - {testimonial.role}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{testimonial.content}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button type="button" variant="ghost" size="sm" onClick={() => setEditingTestimonial(index)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleDeleteTestimonial(index)}>
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save Testimonials Section
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Enquiry Editor Component
const EnquiryEditor = ({ data, onSave }: { data: any; onSave: (data: any) => void }) => {
  const [formData, setFormData] = useState(data);
  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct.trim()) {
      setFormData({
        ...formData,
        productOptions: [...formData.productOptions, newProduct.trim()],
      });
      setNewProduct('');
    }
  };

  const handleRemoveProduct = (index: number) => {
    setFormData({
      ...formData,
      productOptions: formData.productOptions.filter((_: any, i: number) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('Enquiry section updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enquiry Section</CardTitle>
        <CardDescription>Edit enquiry form content</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Badge</Label>
              <Input value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} />
            </div>
            <div>
              <Label>Background Image</Label>
              <Input value={formData.backgroundImage} onChange={(e) => setFormData({ ...formData, backgroundImage: e.target.value })} />
            </div>
          </div>
          <div>
            <Label>Title</Label>
            <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          </div>
          <div>
            <Label>Subtitle</Label>
            <textarea
              className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Contact Phone</Label>
              <Input value={formData.contactPhone} onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })} />
            </div>
            <div>
              <Label>Contact Email</Label>
              <Input value={formData.contactEmail} onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })} />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Product Options</Label>
            <div className="flex gap-2">
              <Input value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="Add product option..." />
              <Button type="button" onClick={handleAddProduct}><Plus className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.productOptions.map((option: string, index: number) => (
                <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => handleRemoveProduct(index)}>
                  {option} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>

          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save Enquiry Section
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Settings Editor Component
const SettingsEditor = ({ data, onSave }: { data: any; onSave: (data: any) => void }) => {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('Site settings updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Site Settings</CardTitle>
        <CardDescription>Manage general site settings</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Site Name</Label>
            <Input value={data.siteName} onChange={(e) => setFormData({ ...formData, siteName: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Contact Email</Label>
              <Input value={data.contactEmail} onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })} />
            </div>
            <div>
              <Label>Contact Phone</Label>
              <Input value={data.contactPhone} onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })} />
            </div>
          </div>
          <div>
            <Label>Address</Label>
            <textarea
              className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={data.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <Separator />
          <h3 className="font-semibold">Social Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Facebook URL</Label>
              <Input value={data.socialLinks.facebook} onChange={(e) => setFormData({ ...formData, socialLinks: { ...data.socialLinks, facebook: e.target.value } })} />
            </div>
            <div>
              <Label>Twitter URL</Label>
              <Input value={data.socialLinks.twitter} onChange={(e) => setFormData({ ...formData, socialLinks: { ...data.socialLinks, twitter: e.target.value } })} />
            </div>
            <div>
              <Label>Instagram URL</Label>
              <Input value={data.socialLinks.instagram} onChange={(e) => setFormData({ ...formData, socialLinks: { ...data.socialLinks, instagram: e.target.value } })} />
            </div>
            <div>
              <Label>LinkedIn URL</Label>
              <Input value={data.socialLinks.linkedin} onChange={(e) => setFormData({ ...formData, socialLinks: { ...data.socialLinks, linkedin: e.target.value } })} />
            </div>
          </div>
          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CMSManagement;
