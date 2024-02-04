export const wayToFileStart = () => {
    return process.env.HOME || process.env.USERPROFILE;
}
export let wayToFile = wayToFileStart();

export let setWayToFile = (path) => {
    wayToFile = path;
}
