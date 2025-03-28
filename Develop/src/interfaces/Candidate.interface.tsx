// TODO: Create an interface for the Candidate objects returned by the API

export default interface Candidate {
  readonly login: string;
  readonly id: number;
  readonly avatar_url: string;
  readonly html_url: string;
  readonly location?: string;
  readonly email?: string;
  readonly company?: string;
  readonly bio?: string;
  readonly name?: string;
}

  
