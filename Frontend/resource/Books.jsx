import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../src/components/miniComponents/MiniCard";
import { Context } from "../src/main";

const Books = () => {
  const { mode } = useContext(Context);
  const { subject } = useParams();
  const subjectBooks = {
    EEE_101W: [
      {
        title: "Fundamentals of Electric Circuits-5th Edition",
        link: "https://drive.google.com/file/d/1iUUYgxnCp69oWKcdCROQyDd942MuuIuc/view",
      },
      {
        title: "Solution of Fundamentals of Electric Circuits-4th Edition",
        link: "https://drive.google.com/file/d/1efySbTbBfGaqNleJt4m5cF6kDwURShTO/view",
      },
      {
        title: "Introductory Circuit Analysis",
        link: "https://drive.google.com/file/d/1dnVkTcWkl7i0hnvfMnf6QZ3QnmZlNeuz/view",
      },
      {
        title: "Solution of Introductory Circuit Analysis",
        link: "https://drive.google.com/file/d/1AKQgCMmL6T1SvZ3UF00I-BzhD4tCXyvI/view",
      }
    ],
    ENG_101W: [
      {
        title: "Subjunctive Exercise",
        link: "https://drive.google.com/file/d/1AKQgCMmL6T1SvZ3UF00I-BzhD4tCXyvI/view?usp=sharing",
      },
      {
        title: "Outline structure",
        link: "https://docs.google.com/document/d/1RMDW7eHy3wOzR-1RAYKw09z540f62PW0/edit?usp=drive_link",
      },
      {
        title: "Causative Exer",
        link: "https://drive.google.com/file/d/1g4018V_Pe2RTD7BuLxDM71bfhgs6bxGC/view?usp=drive_link",
      },
      {
        title: "Exercise",
        link: "https://drive.google.com/file/d/1PcMpVnSO7gMgz4tEztQhqBgHA_XGtgG0/view?usp=sharingps://drive.google.com/file/d/1ce_yxZ3fjIQyrF1xPRaYJ1eFFtcG7A2k/view",
      },
      {
        title: "Facebook-Should-be-Banned-sample-argumentative-essay",
        link: "https://docs.google.com/document/d/1gOmOezOZCve6HKliXoznCKT_T-Q_RmRM/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      }
    ],
    MAT_105W: [
      {
        title: "Thomas and finlaycalculus-and-analytic-geometry-ninth-edition",
        link: "https://drive.google.com/file/d/1Ryrwz26qnxQWghvoWRWiZNNaVUtw0luG/view?usp=sharing",
      }
    ],
    SWE_123 : [
      {
        title: "Discrete Mathematics and Its Applications - Kenneth Rosen (2012)",
        link: "https://drive.google.com/file/d/1ot4OC_XASOzdjafMYNGgTqYrNkk6V1MC/view?usp=sharing",
      },
      {
        title: "Susanna-S.-Epp-Discrete-Mathematics-with-Applications-Cengage-Learning-2019",
        link: "https://drive.google.com/file/d/1ot4OC_XASOzdjafMYNGgTqYrNkk6V1MC/view?usp=sharing",
      }
    ],
    SWE_121 : [
      {
        title: "সি প্রোগ্রামিং সুবিন",
        link: "https://drive.google.com/file/d/1899Wu4kp6sfcSC_ADU9bXVc4VYj47aBh/view?usp=sharing",
      },
      {
        title: "Teach yourself C",
        link: "https://drive.google.com/file/d/1Dwkc5eMmCYhl9jWWwvt9fAVb3xL_p27I/view?usp=sharing",
      },
      {
        title: "Dawn of Porgramming Contest (July, 2015)",
        link: "https://drive.google.com/file/d/1lOYdj6T4Ag82hs-IIeUZlGJLbUjgUFcb/view?usp=sharing",
      }
    ],
    PHY_103W : [
      {
        title: "Physics Textbook",
        link: "https://drive.google.com/file/d/1U6W3S4v9mTlLveVxoknFJl1CT8nz6FEI/view?usp=sharing",
      },
      {
        title: "Heat and Thermodynamics",
        link: "https://drive.google.com/file/d/1HLkLqe3NUekGsekPtHPPPGoqXDqu67cP/view?usp=sharing",
      }
    ],
    MAT_107W : [
      {
        title: "Schaums-Outline-of-Linear-Algebra-5th-Ed",
        link: "https://drive.google.com/file/d/1tYz_97ydLnm_kl33HgkZfu_HYatO19tR/view?usp=sharing",
      },
      {
        title: "Elementary_linear_algebra_applications_v",
        link: "https://drive.google.com/file/d/1g79RjXEf7xeoGd9fmfR67Qt2QOPkqMtj/view?usp=sharing",
      }
    ],
    SWE_127: [
      {
        title: "Lipschutz, Seymour - Data Structures (2014, McGraw Hill Education)",
        link: "https://drive.google.com/file/d/1HifQnqpPORYXeHDxxNMM1ITow_WWem7F/view?usp=sharing",
      },
      {
        title: "Data Structure",
        link: "https://drive.google.com/file/d/140a9siMSqUM3_6YDE517-hLf-mqYNUHY/view?usp=sharing",
      }
    ],
    SOC_203W: [
      {
        title: "Sociology A Brief Introduction by Richard T. Schaefer",
        link: "https://drive.google.com/file/d/1Or8r-g97setl-9fKJM3CmDcWTC_rOfI1/view?usp=sharing",
      },
      {
        title: "Sociology",
        link: "https://drive.google.com/file/d/1COWun7vzLTBMADsJg4iMnnH_8wtfUrdY/view?usp=sharing",
      }
    ],
    SWE_125 : [
      {
        title: "Roger-S.-Pressman_-Bruce-R.-Maxin-Software-E ... ners-Approach-McGraw-Hill-Education-2014",
        link: "https://drive.google.com/file/d/12AbuNt7vd8gJqSWOJbXyKKuUMKGt2grZ/view?usp=sharing",
      },
      {
        title: "Software-Engineering-10th-Edition-PDFDrive",
        link: "https://drive.google.com/file/d/1fdaHMtjbuvfrP0GPjWtbz9VQ70BvmQ8x/view?usp=sharing",
      }
    ],
    STA_101W : [
      {
        title: "Introductory Statistics",
        link: "https://drive.uqu.edu.sa/_/mskhayat/files/MySubjects/20178FS%20Elementary%20Statistics/Introductory%20Statistics%20(7th%20Ed).pdf",
      },
      {
        title: "Probability And Statistics: The Science of Uncertainity",
        link: "https://www.utstat.toronto.edu/mikevans/jeffrosenthal/book.pdf",
      }
      
    ],
    SWE_229 : [
      {
        title:"Introduction_to_algorithms-3rd Edition",
        link: "https://drive.google.com/file/d/1F3V1294HsHkiSbVHTPyGyA4Af5hYLd3E/view?usp=sharing",
      },
      {
        title: "Problem-Solving Methods in Combinatorics.pdf",
        link: "https://drive.google.com/file/d/1gSyrRheKlyZ4_gdD-WH1G4nrMDakEiZH/view?usp=sharing",
      },
      {
        title: "Algorithms (4th ed.) [Sedgewick & Wayne 2011-03-19].pdf",
        link: "https://drive.google.com/file/d/11NgXQUpPob--zjeun5rtmD5CGNT1_58L/view?usp=sharing",
      }
      
    ],
    SWE_235 : [
      {
        title:"Engineering-Ethics.pptx",
        link: "https://docs.google.com/presentation/d/1Z4CP4dPSRaUOx03tMcy_5e_Z8J1or1Fv/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title: "ETHICS IN ENGINEERING slide-2",
        link: "https://drive.google.com/file/d/1DV82iVj7jFmwPHeolnOyPZJY8gc4mK0w/view?usp=sharing",
      }
    ],
    SWE_237 : [
      {
        title:"Kenneth_C.Laudon,Jane_P_.Laudon_- ... ormation_Sysrem_13th_Edition_.pdf",
        link: "https://drive.google.com/file/d/1x0tBaFQYcqBqVbEMC2VmP-d6coWidpPm/view?usp=sharing",
      },
      {
        title: "ip-addresses.pdf",
        link: "https://drive.google.com/file/d/1JsQ1W2dsUFIuCPmgDhukN9C35oyHrFrB/view?usp=sharing",
      },
      {
        title: "MIS-Example-UseCaseWorkFlow.pdf",
        link: "https://drive.google.com/file/d/12YJTvRuhQem27vlG9meFnw_yxJCnS7AE/view?usp=sharing",
      }
    ],
    SWE_233 : [
      {
        title:"OPERATING SYSTEMS NOTES R18.pdf",
        link: "https://drive.google.com/file/d/1pmG56XoROxcOTfuS5Mn5Hwh6lC251-4b/view?usp=sharing",
      }
    ],
    SWE_231 : [
      {
        title:"Numerical-Analysis-Using-MATLAB-and-Excel-Steven-T.-Karris.pdf",
        link: "https://drive.google.com/file/d/1jHEs9dKpvQgXVyN2fnEHNR9Lt_ScQP62/view?usp=sharing",
      },
      {
        title:"Numerical Methods for Engineers-6th edi.pdf",
        link: "https://drive.google.com/file/d/1YD-WQDFGFmZNW93LcrI1G0htO-8zjP7t/view?usp=sharing",
      },
    ],
    SWE_227 : [
      {
        title:"Sipser_Introduction.to.the.Theory.of.Computation.3E.pdf",
        link: "https://drive.google.com/file/d/1omz9EgJKrPbCZK_xHOVYnfDZlbQ3Aq-I/view?usp=sharing",
      },
      {
        title:"Introduction to Languages and the theory of computation by JC Martin.pdf",
        link: "https://drive.google.com/file/d/1v9THYdicENHCVCLAesgavc_t2-0Y3LNK/view?usp=sharing",
      },
      {
        title:"Hopcroft-Automata Theory, Languages,and Computation.pdf",
        link: "https://drive.google.com/file/d/1N2W0SUeeHajh7bJIT9XRLWPFlO0blqW5/view?usp=sharing",
      },
    ],
    
  };

  const books = subjectBooks[subject] || [];

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
    <div className="book-container">
      <h1>Books</h1>
      <div className="book-section">
        {books.map((book, index) => (
          <MiniCard key={index} subject={book.title} link={book.link} />
        ))}
      </div>
    </div>
    </article>
  );
};

export default Books;
