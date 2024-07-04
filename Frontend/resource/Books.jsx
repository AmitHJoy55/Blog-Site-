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
    CSE_313W : [
      {
        title:"Lecture Notes on Computer Networks.pdf",
        link: "https://drive.google.com/file/d/1lMVDk-OVdq396qgV_kAH96MIv_RP3qId/view?usp=sharing",
      },
      {
        title:"Lecure#1 - Fundamentals.pdf",
        link: "https://drive.google.com/file/d/1BTJiO9rovoRCRVahghBJs82zFtvjh4q4/view?usp=sharing",
      },
      {
        title:"Lecure#2 - Fundamentals.pdf",
        link: "https://drive.google.com/file/d/14T26_8_Vy8Jd2ArWUL72H900WBEYzotq/view?usp=sharing",
      },
      {
        title:"Lecure#3 - Local Area Network.pdf",
        link: "https://drive.google.com/file/d/1Z8iRWCc9oLwYt_az5fOH6f725Hr-2Pd9/view?usp=sharing",
      },
      {
        title:"Lecure#4 - Local Area Network.pdf",
        link: "https://drive.google.com/file/d/1HcKVSxrsfkDcFY3OZdrUe1W9Jh-dN3Ea/view?usp=sharing",
      },
      {
        title:"Lecure#5 - Local Area Network.pdf",
        link: "https://drive.google.com/file/d/1n478YOgVrTbG0qbpb4qs2jhwoTY_f6P7/view?usp=sharing",
      },
      {
        title:"Lecure#6 - Network Layer.pdf",
        link: "https://drive.google.com/file/d/1II0AgHTIJiYX10-zfEZ3DcOG9fsFci_q/view?usp=sharing",
      },
      {
        title:"Lecure#7 - Network Layer.pdf",
        link: "https://drive.google.com/file/d/1G8ZFJ_SA9lPBj7j7tbyaTu1KHeVXNn40/view?usp=sharing",
      },
    ],
    SWE_321 : [
      {
        title:"Design Patterns Elements of Reusable Object-Oriented Software.pdf",
        link: "https://drive.google.com/file/d/1CS8smbNif8Yw3fCpmeJeL-wuufGxZzB9/view?usp=sharing",
      },
      {
        title:"Head First Design Patterns.pdf",
        link: "https://drive.google.com/file/d/1qaHMYALAXZe-mWSFCltZSklILA1rMs6a/view?usp=sharing",
      }
    ], 
    SWE_323 : [
      {
        title:"01_Introduction.PPTX",
        link: "https://docs.google.com/presentation/d/1OCS6HPY6XctMGzJxqNiWuuLiEPDbbi2s/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"02_Agent.PPTX",
        link: "https://docs.google.com/presentation/d/1PIVYMk3uLrqlfoPoqMf5eCAr4ca-9ckS/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Copy of 03_Uninformed Search.PPTX",
        link: "https://docs.google.com/presentation/d/1S6CyAbwGyATpbSwImkI4A9sIw3WmVoq-/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Copy of 04_State Space search.PPTX",
        link: "https://docs.google.com/presentation/d/1fq7LhCGWfFJP8S5T7RJcT4xpHQ4AAGbf/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Copy of 05_Informed Search.PPTX",
        link: "https://docs.google.com/presentation/d/1pvEQ6ilZjFh3vQB_kHzF8lwvpv04a23m/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Copy of 06_Local Search.PPTX",
        link: "https://docs.google.com/presentation/d/1nXLh1wlDWcYcQ4N-pp3jCUj7niI6jOa7/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Copy of 07_CSP.PPTX",
        link: "https://docs.google.com/presentation/d/1cM-aFM2wonoNkNiQgrLWXCZRg3j6TPeL/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      }
    ], 
    SWE_327 : [
      {
        title:"Chapter 1: Introduction",
        link: "https://docs.google.com/presentation/d/14jo9Vn9zoBHozM9LFdPqNv54QsEE2aTm/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 3: Introduction to SQL",
        link: "https://docs.google.com/presentation/d/17qYB6GRlJ0iIqJHlrqD8_KZ_FHRATmIT/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 7: Entity-Relationship Model",
        link: "https://docs.google.com/presentation/d/1Qu9AAKKYnyGNYmyrtE5q90m0IwCzbWSw/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 10: Storage and File Structure",
        link: "https://docs.google.com/presentation/d/1isxnNZRJCO_yYQ2pwr1RtvOEEysaGeZX/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 11: Indexing and Hashing",
        link: "https://docs.google.com/presentation/d/1ZLMndkFl7fKAfgNrZWYCZjkECtBTpRm7/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 14: Transactions ",
        link: "https://docs.google.com/presentation/d/1FrngFZ_TZup1UJ5rhVNYVuMLGk1s-qm-/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 15 : Concurrency Control",
        link: "https://docs.google.com/presentation/d/1ks_TuSJ9Ciba-7qra_F03aWqf7OYxYKe/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Chapter 17: Database System Architectures",
        link: "https://docs.google.com/presentation/d/12JQ_Lmi20OaC1qiIDTs_AFgXNcRdMyFC/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      }
    ], 
    SWE_330 : [
      {
        title:"Study Plan on HTTP and REST.pdf",
        link: "https://drive.google.com/file/d/1LafVd82LxrdyHJzum65v7AnRaBpkky2V/view?usp=sharing",
      },
      {
        title:"Gerti Kappel - Web Tech.pdf",
        link: "https://drive.google.com/file/d/1h0e-7OpyizIIPqTCyOdwGpTUA9ZIIp3M/view?usp=sharing",
      }
    ], 
    BUS_301W : [
      {
        title:"Entrepreneur_Development-1.pdf",
        link: "https://drive.google.com/file/d/1N3eAfxGs8t4ALyzrHg_Uko42QYO2V236/view?usp=sharing",
      },
      {
        title:"Chapter-02",
        link: "https://drive.google.com/file/d/19BslbZxNUgJ9XQ2BL9FWsF7YbYwHwDA3/view?usp=sharing",
      },
      {
        title:"Chapter-03",
        link: "https://drive.google.com/file/d/1Az_5x0H-67wtulE8sKINcuVvnSAVIA2S/view?usp=sharing",
      }
    ], 
    SWE_343 : [
      {
        title:"[Adaptive Computation and Machine L ... 012, The MIT Press) - libgen.lc.pdf",
        link: "https://drive.google.com/file/d/1TQsCfMOSnmWHa8AG3012MLkw8YPfHUdY/view?usp=sharing",
      }
    ], 
    SWE_333 : [
      {
        title:"SW Testing PDF.pdf",
        link: "https://drive.google.com/file/d/1Gd58WrrYfP8lehV_U2XxIBMnRdfyg0Jo/view?usp=sharing",
      }
    ], 
    SWE_327: [
      {
        title:"Coulouris, George_Dollimore, Jean_K ... cepts and Design-Pearson (2011).pdf",
        link: "https://drive.google.com/file/d/1Y7MI_rcWIDYex7w74NTubqs9ShiZD0iz/view?usp=sharing",
      }
    ], 
    SWE_423: [
      {
        title:"Schaum's Outline of Theory and Problems of Comp ... Roy A._ Xiang, Zhigang -McGraw-Hill (2000).pdf",
        link: "https://drive.google.com/file/d/1Cz9XUe9vIM_8FecPHdrPKAaoIp-teo28/view?usp=sharing",
      },
      {
        title:"Digital Image Processing",
        link: "https://docs.google.com/presentation/d/1nLc5rGduSGrKoiEkOd6FiRY49OriW3TD/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"Basics of Computer",
        link: "https://docs.google.com/presentation/d/1XsfjRIG0Nkv9VzgfTkVdelbAJuyt_9r2/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"02-color",
        link: "https://docs.google.com/presentation/d/1BKhkf4kN-7qAuEYZrPXGbrpCdnrK4Nyi/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
      {
        title:"0_3_Scan_Conversion_Algo_Examples",
        link: "https://docs.google.com/presentation/d/1quEUDVWcrRsNeCpZEZ0jxjEnOafBhVSi/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      },
    ], 
    SWE_425 : [
      {
        title:"Software Project Management.pdf",
        link: "https://github.com/Sumonta056/SWE-4-1-Semester-Resources/blob/9ef722c8510c366e67f926925d402603e040f4b2/Software%20Project%20Management/Book/SPM.pdf",
      }
    ], 
    SWE_429 : [
      {
        title:"Michael Goodrich, Roberto Tamassia - Introduction ... ernational Edition (2014, Pearson) - libgen.lc.pdf",
        link: "https://drive.google.com/file/d/125Hxo57DzdqRkWhNrv1ELE5OWbckXtrb/view?usp=sharing",
      },
      {
        title:"cryptography-and-network-security_-principles-and-practice-7th-global-edition.pdf",
        link: "https://drive.google.com/file/d/1qHyhvv0Gcx0lUU21KUHNvpwnA36lhaUN/view?usp=sharing",
      }
    ], 
    SWE_431 : [
      {
        title:"Gerard Jounghyun Kim -Human Computer Interaction.pdf",
        link: "https://github.com/Sumonta056/SWE-4-1-Semester-Resources/blob/main/Human%20Computer%20Interaction/Book/Gerard%20Jounghyun%20Kim%20-%20Human-Computer%20Interaction%20%20Fundamentals%20and%20Practice-Auerbach%20Publications%20(2015).pdf",
      }
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
