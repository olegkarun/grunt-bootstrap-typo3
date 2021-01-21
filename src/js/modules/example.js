/** you can have multiple export calls per module */
export const testArrowFunction = () => {
  $(document).ready(function () {
    const content = `
      <div>
        Content From testArrowFunction()
      </div>
    `;

    $("body").append(content)

    console.log("Hello from testArrowFunction")
  });
}

export function testFunctionDeclaration() {
  $(document).ready(function () {
    const content = `
      <div>
        Content From testFunctionDeclaration()
      </div>
    `;

    $("body").append(content)

    console.log("Hello from testArrowFunction")
  });
}

/** export default can be only one per module */
export default function testDefaultFunction() {
  $(document).ready(function () {
    const content = `
      <div>
        Content From testDefaultFunction()
      </div>
    `;

    $("body").append(content)

    console.log("Hello from testArrowFunction")
  });
}