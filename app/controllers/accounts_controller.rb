class AccountsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_account, only: [:show, :edit, :update, :destroy]

  def index
    @accounts = current_user.accounts
    render component: "Accounts", props: { accounts: @accounts, user: current_user}
  end

  def show
    render component: "Account", props: { account: @account, user: current_user}
  end

  def new
    @account = current_user.accounts.new
    render component: "AccountNew", props: { account: @account, user: current_user}
  end

  def create
    if @account.save
      flash[:success] = "Account Created"
      redirect_to root_path
    else
      flash[:error] = "Error #{@accounts.errors.full_messages.join("\n")}"
      render component: "AccountNew", props: { account: @account, user: current_user}
    end
  end

  def edit
    render component: "AccountEdit", props: { account: @account, user: current_user}
  end

  def update
    if @account.update(account_params)
      flash[:success] = "Account Updated"
      redirect_to root_path
    else
      flash[:error] = "Error #{@accounts.errors.full_messages.join("\n")}"
      render component: "AccountEdit", props: { account: @account, user: current_user}
    end
  end

  def destroy
    @account.destroy
    flash[:success] = "Account Deleted"
    redirect_to root_path
  end

  private
  def account_params
    params.require(:account).permit(:account_name, :balance)
  end

  def set_account
    @account = current_user.accounts.find(params[:id])
  end
end
