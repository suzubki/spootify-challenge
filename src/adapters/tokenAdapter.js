// getToken --> return response = { config, data, headers, request, status  }
export const tokenAdapter = ({ data: { access_token, token_type } }) => {
    return { access_token, token_type };
};
