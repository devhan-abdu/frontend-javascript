interface MajorCredits {
   credits: number; 
   readonly __brand: "major";
};
interface MinorCredits {
    credits: number;
    readonly __brand: "minor";
};

function sumMajorCredits(subject1: MajorCredits ,subject2: MajorCredits): MajorCredits {
    const sum = subject1.credits + subject2.credits;
    return {credits:sum , __brand: "major"};
}
function sumMinorCredits(subject1: MinorCredits ,subject2: MinorCredits): MinorCredits {
    const sum = subject1.credits + subject2.credits;
    return {credits:sum , __brand: "minor"};
}