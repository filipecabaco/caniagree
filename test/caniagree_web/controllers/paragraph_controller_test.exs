defmodule CaniagreeWeb.ParagraphControllerTest do
  use CaniagreeWeb.ConnCase

  alias Caniagree.Services
  alias Caniagree.Services.Paragraph

  @create_attrs %{body: "some body", down_vote: 42, up_vote: 42}
  @update_attrs %{body: "some updated body", down_vote: 43, up_vote: 43}
  @invalid_attrs %{body: nil, down_vote: nil, up_vote: nil}

  def fixture(:paragraph) do
    {:ok, paragraph} = Services.create_paragraph(@create_attrs)
    paragraph
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all paragraphs", %{conn: conn} do
      conn = get conn, paragraph_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create paragraph" do
    test "renders paragraph when data is valid", %{conn: conn} do
      conn = post conn, paragraph_path(conn, :create), paragraph: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, paragraph_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "body" => "some body",
        "down_vote" => 42,
        "up_vote" => 42}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, paragraph_path(conn, :create), paragraph: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update paragraph" do
    setup [:create_paragraph]

    test "renders paragraph when data is valid", %{conn: conn, paragraph: %Paragraph{id: id} = paragraph} do
      conn = put conn, paragraph_path(conn, :update, paragraph), paragraph: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, paragraph_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "body" => "some updated body",
        "down_vote" => 43,
        "up_vote" => 43}
    end

    test "renders errors when data is invalid", %{conn: conn, paragraph: paragraph} do
      conn = put conn, paragraph_path(conn, :update, paragraph), paragraph: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete paragraph" do
    setup [:create_paragraph]

    test "deletes chosen paragraph", %{conn: conn, paragraph: paragraph} do
      conn = delete conn, paragraph_path(conn, :delete, paragraph)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, paragraph_path(conn, :show, paragraph)
      end
    end
  end

  defp create_paragraph(_) do
    paragraph = fixture(:paragraph)
    {:ok, paragraph: paragraph}
  end
end
