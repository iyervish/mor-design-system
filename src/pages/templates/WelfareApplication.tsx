import { useState } from 'react';
import { Wheat, Shield, CheckCircle2 } from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Alert } from '../../components/ui/Alert';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { StepIndicator } from '../../components/ui/StepIndicator';

const steps = [
  { id: 1, label: 'Eligibility', status: 'complete' as const },
  { id: 2, label: 'Application', status: 'current' as const },
  { id: 3, label: 'Verification', status: 'upcoming' as const },
];

export default function WelfareApplication() {
  const [currentStep, setCurrentStep] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(s => s + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="mor min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header style={{ backgroundColor: 'var(--vana-900)', borderBottom: '3px solid var(--sona-400)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--vana-700)' }}>
              <Wheat size={24} style={{ color: 'var(--sona-300)' }} />
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: 'var(--vana-300)' }}>
                Ministry of Agriculture & Farmers Welfare
              </div>
              <h1 className="text-xl font-bold" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                PM Kisan Samman Nidhi
              </h1>
              <div className="text-xs" style={{ color: 'var(--vana-300)' }}>
                pmkisan.gov.in — Farmer Income Support Scheme
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            New Farmer Registration
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Eligible farmers receive ₹6,000 per year in three equal instalments of ₹2,000.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <StepIndicator
            steps={steps.map(s => ({
              ...s,
              status: s.id < currentStep ? 'complete' : s.id === currentStep ? 'current' : 'upcoming',
            }))}
          />
        </div>

        {submitted ? (
          <Card variant="outline">
            <CardContent className="py-12 text-center">
              <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: 'var(--vana-600)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Application Submitted Successfully
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Your PM-KISAN registration has been submitted for processing.
              </p>
              <Alert variant="success" title="Reference Number: PM-KISAN-2024-38291">
                Save this reference number. You'll need it to track your application status.
                Your bank account will be credited within 30–60 days after verification.
              </Alert>
              <Button className="mt-6" onClick={() => { setSubmitted(false); setCurrentStep(1); }}>
                Register Another Farmer
              </Button>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>Step 1: Eligibility Check</CardTitle>
                  <CardDescription>
                    PM-KISAN is for small and marginal farmer families holding cultivable land up to 2 hectares.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert variant="info" title="Eligibility Criteria">
                    The farmer must own cultivable land in their name. Institutional landholders, farmer families with members
                    serving/retired as constitutional post holders, income tax payers, or professionals are not eligible.
                  </Alert>
                  <Input label="Aadhaar Number" placeholder="Enter 12-digit Aadhaar number" type="text" maxLength={12} required />
                  <Input label="Farmer's Full Name" placeholder="As per Aadhaar card" required />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="State / UT"
                      required
                      options={[
                        { value: 'UP', label: 'Uttar Pradesh' },
                        { value: 'MH', label: 'Maharashtra' },
                        { value: 'MP', label: 'Madhya Pradesh' },
                        { value: 'RJ', label: 'Rajasthan' },
                        { value: 'TN', label: 'Tamil Nadu' },
                        { value: 'KA', label: 'Karnataka' },
                        { value: 'AP', label: 'Andhra Pradesh' },
                        { value: 'BR', label: 'Bihar' },
                      ]}
                    />
                    <Select
                      label="District"
                      required
                      options={[
                        { value: 'agra', label: 'Agra' },
                        { value: 'mathura', label: 'Mathura' },
                        { value: 'lucknow', label: 'Lucknow' },
                        { value: 'varanasi', label: 'Varanasi' },
                      ]}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Check Eligibility & Continue</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>Step 2: Application Details</CardTitle>
                  <CardDescription>Enter your bank account and land details for direct benefit transfer.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--vana-50)', border: '1px solid var(--vana-200)' }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: 'var(--vana-700)' }}>Important</p>
                    <p className="text-xs" style={{ color: 'var(--vana-600)' }}>
                      Enter your bank account linked to Aadhaar for Direct Benefit Transfer (DBT). Funds will be credited electronically.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="IFSC Code" placeholder="e.g. SBIN0001234" required />
                    <Input label="Bank Account Number" placeholder="Enter account number" type="text" required />
                  </div>
                  <Input label="Bank Name" placeholder="e.g. State Bank of India" required />
                  <Input label="Branch Name" placeholder="Enter branch name" required />

                  <div className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                    <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                      Land Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input label="Khasra / Survey Number" placeholder="Plot/survey number" required />
                      <Input label="Land Area (in hectares)" placeholder="e.g. 1.5" type="number" step="0.01" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <Select
                        label="Land Category"
                        required
                        options={[
                          { value: 'irrigated', label: 'Irrigated' },
                          { value: 'unirrigated', label: 'Un-irrigated' },
                          { value: 'forest', label: 'Forest Land' },
                        ]}
                      />
                      <Input label="Khata / Khesra Number" placeholder="Revenue record number" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>Back</Button>
                    <Button type="submit">Save & Continue to Verification</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>Step 3: OTP Verification</CardTitle>
                  <CardDescription>
                    A 6-digit OTP has been sent to your Aadhaar-linked mobile number ending in ••••78.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center text-xl font-bold rounded-lg border-2 outline-none transition-colors focus:border-current"
                        style={{
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text)',
                          backgroundColor: 'var(--color-surface)',
                          fontFamily: 'var(--font-mono)',
                        }}
                        value={otp[i] || ''}
                        onChange={(e) => {
                          const newOtp = otp.split('');
                          newOtp[i] = e.target.value;
                          setOtp(newOtp.join(''));
                        }}
                        aria-label={`OTP digit ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    Didn't receive OTP? <button type="button" className="font-semibold underline" style={{ color: 'var(--color-primary)' }}>Resend in 00:45</button>
                  </p>
                  <Alert variant="warning" title="Consent Notice">
                    By submitting, you consent to share your Aadhaar, land, and bank details with the Ministry of Agriculture for verification and benefit disbursement.
                  </Alert>
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>Back</Button>
                    <Button type="submit">
                      <Shield size={15} className="mr-1.5" />
                      Submit Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        )}

        {/* Helpline */}
        <div className="mt-8 p-4 rounded-lg text-sm text-center" style={{ backgroundColor: 'var(--color-background-subtle)', color: 'var(--color-text-secondary)' }}>
          Need help? Call PM-KISAN Helpline: <strong style={{ color: 'var(--color-text)' }}>155261</strong> or{' '}
          <strong style={{ color: 'var(--color-text)' }}>1800115526</strong> (Toll Free) · Mon–Sat, 8 AM – 8 PM
        </div>
      </div>
    </div>
  );
}
