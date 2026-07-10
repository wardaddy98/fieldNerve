
export const handleResponse = (
    res,
    statusCode,
    customMessage,
    body,
) => {
    const responseObject = {
        status: statusCode,
        message: customMessage || '',
        ...(body !== undefined && {
            body,
        }),
    };

    return res.status(statusCode).json(responseObject);
};
