export type WindowContent = {
  companyName: string;
  tenure: string;
  description: string;
  skillset: Array<string>;
};

export const windowContentData = {
  amazon: {
    companyName: 'Amazon, Amazon Prime Video',
    tenure: '3yrs, 6mts',
    description: `When I moved to Seattle for the first time, it was because of a job. A job I stayed in for four years.
            
            I worked for Amazon from age 24 to 28. What does a 24-year old feel like when they move to a new city for a new job? 
            I’ve done it once before, when I worked in Japan. The first thing I remember about Seattle was how empty it seemed compared 
            to New York. And the west coast grunge. Plus the toe shoes people would wear in public…

            I built front ends for Amazon using React, TypeScript, Java and Kotlin. I learned a lot about AWS. I became a point of contact 
            for front end tools, software and features for Amazon Prime Video Livestream Events, launching visuals that would reach millions 
            of household users every week. I translated technical requirements into beautiful designs, and collaborated with all types of people technical and non-technical alike. 
        `,
    skillset: [
      'TypeScript',
      'Java',
      'Kotlin',
      'JavaScript',
      'Figma',
      'Git',
      'AWS',
    ],
  },
  liferay: {
    companyName: 'Liferay Tokyo',
    tenure: '1yr, 8mts',
    description: `I will never forget the time I spent in Tokyo. I liken Japan to my second home. Every time I land, I know exactly where to go, 
            what to do, and how to live.

            At 22, I moved to Tokyo for work, as a Consultant for a company called Liferay. I made web based solutions with TypeScript 
            and React, sharing outcomes with contracting companies in both Japanese and English. Navigating technical requirements 
            in Japanese became a second nature, and I got used to functioning at a highly detailed capacity. `,
    skillset: [
      'TypeScript',
      'Java',
      'Kotlin',
      'JavaScript',
      'Figma',
      'Git',
      'AWS',
    ],
  },
  marvel: {
    companyName: 'Disney, Marvel Entertainment',
    tenure: 'Winter 2019 Internship',
    description: `After going through the interview after submitting a blind application on the Disney website for their Front End Engineering 
        internship at the Marvel office in 5th Avenue, NYC, I received an offer for their Winter 2019 internship, while simultaneously also getting 
        an offer from J. Crew. I felt on top of the world. 

        At Disney, I had a lot of perks. I worked on their Marvel website, prototyping features and designs fit for a real superhero. 
    `,
    skillset: ['Figma', 'JavaScript', 'React', 'Front End Web Development'],
  },
  ibm: {
    companyName: 'IBM',
    tenure: 'Summer 2018 Internship',
    description: `My second internship as an undergraduate was at IBM in Armonk, NY and Southbury, CT. It was the biggest company I had worked for so far, 
        and the internship program to me was a luxurious experience: hosted hotel stays, free breakfasts, and a nice desk in a sunny office near restaurants 
        and ice cream shops.

        I worked for the IBM CIO, creating solutions in Angular, JavaScript and TypeScript to track international tax applications and overseas purchase control. 
    `,
    skillset: [''],
  },
} satisfies Record<string, WindowContent>;
