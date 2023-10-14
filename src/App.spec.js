import { render,screen,fireEvent } from '@testing-library/react';
import App from './App';

describe("Tic Tac Toe Game",()=>{
  it("Should render 9 buttons",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button");
    expect(button.length).toBe(9);
  });

  it("Should be that the value of the square is null intially",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    expect(button.textContent).toBe("");
  });

  it("Should render X after a button is clicked",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  it("Should set every evenly clicked square to be O",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(buttons[1].textContent).toBe("O");
  });

  it("Should not set different values to same square",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  })
  it("Should show the winner status after win",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[8]);
    const status=screen.getByTestId("winner-status");
    expect(status.textContent[0]).toBe("W"); 
  })
  
  it("Should not be able to click after a win",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[8]);
    fireEvent.click(buttons[7]);
    expect(buttons[7].textContent).toBe("");
  })
})