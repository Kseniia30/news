import { format } from 'date-fns';

export const result = date => {
    return format(new Date(date), "MMMM dd'th', yyyy", { addSuffix: true });
};
