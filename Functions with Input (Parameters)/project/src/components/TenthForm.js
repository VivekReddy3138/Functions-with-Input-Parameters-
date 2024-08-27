import React, { useRef } from "react";

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let engInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  let lastNameSpanRef = useRef();
  let firstNameSpanRef = useRef();
  let telSpanRef = useRef();
  let hindiSpanRef = useRef();
  let engSpanRef = useRef();
  let mathsSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  let inputOnFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "pink";
  };

  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };

  let inputOnChange = (inputRef,spanRef) => {
    spanRef.current.innerHTML =
    inputRef.current.value >= 35 ? "PASS" : "FAIL";
  spanRef.current.style.backgroundColor =
    inputRef.current.value >= 35 ? "Green" : "Red";
  }
  return (
    <div>
      <form>
        <div>
          <label>firstName</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
          ></input>
          <span ref={firstNameSpanRef}></span>
        </div>
        <div>
          <label>LastName</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
          ></input>
          <span ref={lastNameSpanRef}></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            ref={telInputRef}
            onFocus={() => {
              inputOnFocus(telInputRef);
            }}
            onBlur={() => {
              inputOnBlur(telInputRef);
            }}
            onChange={() => {
              inputOnChange(telInputRef,telSpanRef);
            }}
          ></input>
          <span ref={telSpanRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            ref={hindiInputRef}
            onFocus={() => {
              inputOnFocus(hindiInputRef);
            }}
            onBlur={() => {
              inputOnBlur(hindiInputRef);
            }}
            onChange={() => {
              inputOnChange(hindiInputRef,hindiSpanRef);
            }}
          ></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            ref={engInputRef}
            onFocus={() => {
              inputOnFocus(engInputRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
            }}
            onChange={() => {
              inputOnChange(engInputRef,engSpanRef);
            }}
          ></input>
          <span ref={engSpanRef}></span>
        </div>
        <div>
          <label>Maths</label>
          <input
            ref={mathsInputRef}
            onFocus={() => {
              inputOnFocus(mathsInputRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsInputRef);
            }}
            onChange={() => {
              inputOnChange(mathsInputRef,mathsSpanRef);
            }}
          ></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            ref={sciInputRef}
            onFocus={() => {
              inputOnFocus(sciInputRef);
            }}
            onBlur={() => {
              inputOnBlur(sciInputRef);
            }}
            onChange={() => {
              inputOnChange(sciInputRef,sciSpanRef);
            }}
          ></input>
          <span ref={sciSpanRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            ref={socInputRef}
            onFocus={() => {
              inputOnFocus(socInputRef);
            }}
            onBlur={() => {
              inputOnBlur(socInputRef);
            }}
            onChange={() => {
              inputOnChange(socInputRef,socSpanRef);
            }}
          ></input>
          <span ref={socSpanRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let hindiMarks = Number(hindiInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let mathsMarks = Number(mathsInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let totalMarks =
                telMarks +
                hindiMarks +
                engMarks +
                mathsMarks +
                sciMarks +
                socMarks;

              let perc = (totalMarks / 600) * 100;

              telSpanRef.current.innerHTML = telMarks >= 35 ? "PASS" : "FAIL";
              hindiSpanRef.current.innerHTML =
                hindiMarks >= 35 ? "PASS" : "FAIL";
              engSpanRef.current.innerHTML = engMarks >= 35 ? "PASS" : "FAIL";
              mathsSpanRef.current.innerHTML =
                mathsMarks >= 35 ? "PASS" : "FAIL";
              sciSpanRef.current.innerHTML = sciMarks >= 35 ? "PASS" : "FAIL";
              socSpanRef.current.innerHTML = socMarks >= 35 ? "PASS" : "FAIL";

              resultParaRef.current.innerHTML = `${firstName} ${lastName} got Total marks of ${totalMarks} with percentage of ${perc.toFixed(
                2
              )}%`;
            }}
          >
            Calculate Result
          </button>
        </div>
        <div>
          <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  );
}

export default TenthForm;
