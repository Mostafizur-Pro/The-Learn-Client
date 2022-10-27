import React from "react";
import faq from "../../assets/images/FAQ.webp";

const FAQ = () => {
  return (
    <div>
      <div className="hero min-h-full  mb-5">
        <div className="hero-content flex-col lg:flex-row">
          <img alt="" src={faq} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-5 ">
            <h1 className="text-5xl font-bold">FREQUENTLY ASKED QUESTIONS!</h1>
            <p className="py-6">
              We get asked a lot of questions, so we thought the easiest thing
              to do would be to compile them in a quick and easy FAQ. Click the
              links below to jump to a relevant section.
            </p>
          </div>
        </div>
      </div>

      <div className="w-6/12 mx-auto text-left  ">
        <div
          tabIndex={0}
          className="collapse  collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: Please explain what you understand by computer
            programming.
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer:</strong> Also known as coding or programming,
              computer programming is the process of encoding an algorithm into
              a notation, typically a computer program, by means of some
              programming language so that it can be executed by a computer.
            </p>
            <br />
            <p>
              Each programming language contains a set of instructions for the
              computer to execute a set of tasks. Programming is a complex
              process that includes designing an algorithm, coding the same in a
              programming language, debugging a program, maintaining, and
              updating the code.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: Can you enumerate and explain the various types of errors
            that can occur during the execution of a computer program?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer: </strong>Three types of errors can occur during
              the execution of a computer program. These are:
            </p>
            <br />
            <p>
              <strong>Logical errors – </strong> This occurs in the scenario of
              a computer program implementing the wrong logic. As there is no
              report generated for these types of programming errors, they are
              the most difficult ones to deal with.
            </p>
            <br />
            <p>
              <strong>Runtime error - </strong> Occurs when the program contains
              an illegal operation. For example, dividing a number by 0. These
              are the only errors that are displayed instantly during the
              program execution. Upon the occurrence of a runtime error, the
              program execution is stopped and a diagnostic message is
              displayed.
            </p>
            <br />
            <p>
              <strong>Syntax error - </strong> Occurs when one or more
              grammatical rules of the programming language being used is
              violated. Such errors are detected during compile time.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: Please explain an algorithm. What are some of its
            important features?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer: </strong> An algorithm can be defined as a set of
              finite steps that when followed helps in accomplishing a
              particular task. Important features of an algorithm are clarity,
              efficiency, and finiteness.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: What do you understand by maintaining and updating a
            computer program?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Node</strong> allows developers to write JavaScript code
              that runs directly in a computer process itself instead of in a
              browser.
            </p>
            <br />
            <p>
              <strong>Answer: </strong> The maintenance and updating process of
              a computer program starts post its successful installation. While
              program maintenance is the continuous process of monitoring the
              computer program for bugs and errors, updating the computer
              program means making it better with minor and major changes over
              time.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: Please provide a brief explanation on variables.
          </div>
          <div className="collapse-content">
            <p>
              <strong>Node</strong> allows developers to write JavaScript code
              that runs directly in a computer process itself instead of in a
              browser.
            </p>
            <br />
            <p>
              <strong>Answer: </strong> Variables are used for storing the input
              of a program as well as the computational results during program
              execution. These are actually named memory locations. The value
              stored in a variable can change during the program execution.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Question: Every programming language has reserved words. What are
            they? Give some examples.
          </div>
          <div className="collapse-content">
            <p>
              <strong>Node</strong> allows developers to write JavaScript code
              that runs directly in a computer process itself instead of in a
              browser.
            </p>
            <br />
            <p>
              <strong>Answer: </strong> VReserved words, also known as keywords,
              are the words that have predefined meanings in a particular
              programming language. These reserved words can’t be used or
              redefined for serving other purposes. Following are some examples
              of reserved words:
            </p>
            <br />
            <p>
              <strong>C – </strong> break, case, char, default, else, float, if,
              and int
            </p>
            <br />
            <p>
              <strong>Java – </strong> abstract, boolean, catch, class, const,
              double, enum, finally, implements, instanceof, throws, transient,
              and volatile
            </p>
            <br />
            <p>
              <strong>Python – </strong> and, assert, continue, def, del,
              global, not, lambda, raise, and yield
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <div>
//       <h3>FAQ page</h3>
//       {/* https://hackr.io/blog/programming-interview-questions */}
//     </div>
//   );
// };

export default FAQ;
