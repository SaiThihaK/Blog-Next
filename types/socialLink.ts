export interface SocialLink {
  id: string;
  createdAt: string;
  type: string;
  socialLink: string;
}

export interface GetAllSocialLinksResponse {
  message: string;
  success: boolean;
  data: SocialLink[];
}
