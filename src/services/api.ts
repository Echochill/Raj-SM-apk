export interface AgencyInfo {
  name: string;
  founded: number;
  mission: string;
}

export async function getAgencyInfo(): Promise<AgencyInfo> {
  const response = await fetch('/api/agency-info');
  if (!response.ok) {
    throw new Error('Failed to fetch agency info');
  }
  return response.json();
}

export async function checkHealth(): Promise<{ status: string; timestamp: string }> {
  const response = await fetch('/api/health');
  if (!response.ok) {
    throw new Error('Health check failed');
  }
  return response.json();
}
