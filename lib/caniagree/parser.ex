defmodule Caniagree.Parser do

  @filters ["p", "a", "br", "b", "i"]
  @api_key Application.get_env(:caniagree, :api_key)
  @default_url "https://mercury.postlight.com/parser?url="

  def parse(url) do
    endpoint = "#{@default_url}#{url}"
    headers = [
      {"x-api-key", @api_key}
    ]
    {:ok, resp} = HTTPoison.get(endpoint, headers)
    body = resp.body
    html = body |> Poison.decode! |> Map.get("content")
    text = html |> Floki.text(sep: "\n") |> String.split("\n")
  end
end
